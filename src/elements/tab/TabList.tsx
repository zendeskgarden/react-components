/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { useId } from '@zendeskgarden/container-utilities';
import DotsVerticalIcon from '@zendeskgarden/svg-icons/src/dots-vertical.svg';
import PropTypes from 'prop-types';
import {
  ButtonHTMLAttributes,
  HTMLAttributes,
  forwardRef,
  useEffect,
  useRef,
  useState
} from 'react';

import { useTabsContext } from '../../hooks/tab/useTabsContext';
import { useDocument } from '../../theming/utils/useDocument';
import { useGardenTheme } from '../../theming/utils/useGardenTheme';
import { useText } from '../../theming/utils/useText';
import { ITabListProps } from '../../types/elements';
import { activeElement, ownerDocument } from '../../utils/shared/dom';
import { mergeRefs } from '../../utils/shared/mergeRefs';
import { useBrowserLayoutEffect } from '../../utils/shared/useBrowserLayoutEffect';
import { ITabData } from '../../utils/tab/toTabs';
import { useTabIndicatorMotion } from '../../utils/tab/useTabIndicatorMotion';
import { useTabsOverflow } from '../../utils/tab/useTabsOverflow';
import { StyledTabIndicator } from '../../views/tab/StyledTabIndicator';
import { StyledTabList } from '../../views/tab/StyledTabList';
import { StyledTabListContainer } from '../../views/tab/StyledTabListContainer';
import {
  StyledTabOverflow,
  StyledTabOverflowCircle,
  StyledTabOverflowTrigger
} from '../../views/tab/StyledTabOverflow';
import { StyledTabOverflowSpacer } from '../../views/tab/StyledTabOverflowSpacer';
import { Item } from '../dropdown/Item';
import { ItemGroup } from '../dropdown/ItemGroup';
import { Menu } from '../dropdown/Menu';
import { Tooltip } from '../tooltip/Tooltip';
import { COMPONENT_IDS } from '../utils';

const EMPTY_TABS: ITabData[] = [];

/*
 * The name of a tab in the overflow menu, in the order of its accessible
 * name: `label`, else `aria-label`, else string children, else the tab
 * element's text.
 */
const getTabName = (tab: ITabData, element?: HTMLElement) => {
  if (tab.props.label !== undefined) {
    return tab.props.label;
  }

  if (tab.props['aria-label']) {
    return tab.props['aria-label'];
  }

  if (typeof tab.props.children === 'string') {
    return tab.props.children;
  }

  const text = element?.textContent?.trim();

  return text ? text : undefined;
};

/*
 * The menu label of a tab: its name, else a string or number item, else
 * empty (an object item has no readable text).
 */
const getMenuLabel = (tab: ITabData, element?: HTMLElement) => {
  const name = getTabName(tab, element);

  if (name !== undefined) {
    return name;
  }

  const { item } = tab.props;

  return typeof item === 'string' || typeof item === 'number' ? String(item) : '';
};

/**
 * @deprecated use `Tabs.TabList` instead
 *
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const TabList = forwardRef<HTMLDivElement, ITabListProps>((props, ref) => {
  const { renderOverflowLabel, ...restProps } = props;
  const tabsPropGetters = useTabsContext();
  const theme = useGardenTheme();
  const doc = useDocument(theme);
  const tabs = tabsPropGetters?.tabs ?? EMPTY_TABS;
  const isVertical = !!tabsPropGetters?.isVertical;
  const visibleCount = Math.min(tabsPropGetters?.visibleCount ?? tabs.length, tabs.length);
  const containerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const overflowRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  /* The menu list element, portaled to the document body. */
  const menuRef = useRef<HTMLUListElement>(null);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const menuGroup = useId();

  const getTabId = (value: ITabData['value']) => tabsPropGetters?.getTabProps({ value }).id;
  const { visibleExtent, hiddenExtent, indicator, pendingFocus, rendered } = useTabsOverflow({
    containerRef,
    listRef,
    overflowRef,
    triggerRef,
    menuRef,
    tabs,
    selectedItem: tabsPropGetters?.selectedValue,
    isVertical,
    theme,
    visibleCount,
    setVisibleCount: tabsPropGetters?.setVisibleCount,
    getTabId
  });
  /* Collected entries with no rendered tab (wrapped panels, ghosts,
   * display: none) never enter the menu. */
  const hiddenIndexes = tabs
    .map((_tab, index) => index)
    .filter(index => index >= visibleCount && rendered?.[index] !== false);
  const hiddenTabs = hiddenIndexes.map(index => tabs[index]!);
  const hiddenCount = hiddenTabs.length;
  /* The element of a collected tab, found by the id the hook gives it and
   * scoped to this list (a second tab list reuses the same ids). */
  const getTabElement = (index: number) => {
    const id = getTabId(tabs[index]?.value);

    return Array.from(listRef.current?.querySelectorAll<HTMLElement>('[role="tab"]') ?? []).find(
      element => element.id === id
    );
  };
  const indicatorRef = useTabIndicatorMotion(indicator, isVertical);
  /* A standalone tab list (no `Tabs`) renders without a default name, as before. */
  const ariaLabel = useText(
    TabList,
    restProps,
    'aria-label',
    'Tabs',
    !!tabsPropGetters && !restProps['aria-labelledby']
  );
  /* The development warning only fires while tabs overflow. */
  const overflowText = useText(
    TabList,
    { renderOverflowLabel },
    'renderOverflowLabel',
    '+{{value}} tabs',
    !!tabsPropGetters && hiddenCount > 0
  );

  const getOverflowLabel = (count: number, selectedLabel?: string) => {
    if (renderOverflowLabel) {
      return renderOverflowLabel(count, selectedLabel);
    }

    const base =
      count === 1 ? '+1 tab' : (overflowText ?? '').replace('{{value}}', count.toString());

    return selectedLabel ? `${base}, ${selectedLabel} selected` : base;
  };

  const selectedIndex = tabs.findIndex(tab => tab.value === tabsPropGetters?.selectedValue);
  const selectedHiddenTab = selectedIndex >= visibleCount ? tabs[selectedIndex] : undefined;
  /* The tab that holds the Tab stop and receives focus when tabs leave the
   * menu, computed once in `Tabs`. */
  const entryIndex = tabsPropGetters?.entryIndex ?? -1;

  /* Focus moves between the tabs, the trigger and the menu as tabs move into
   * or out of the overflow menu. */
  useBrowserLayoutEffect(() => {
    const target = pendingFocus.current;
    /* The tabs can render in another document (an iframe). */
    const active = activeElement(ownerDocument(containerRef.current));

    pendingFocus.current = undefined;

    if (target === 'trigger') {
      triggerRef.current?.focus();
    } else if (target === 'tab' && entryIndex >= 0) {
      getTabElement(entryIndex)?.focus();
    } else if (
      target === 'menu' &&
      !overflowRef.current?.contains(active) &&
      !menuRef.current?.contains(active)
    ) {
      /* The focused menu item became a visible tab and unmounted: close the
       * menu and focus the trigger, as Escape would. */
      setIsMenuExpanded(false);
      triggerRef.current?.focus();
    }

    /* The menu unmounts when every tab fits; it must not reopen by itself
     * when tabs overflow again. */
    if (hiddenCount === 0 && isMenuExpanded) {
      setIsMenuExpanded(false);
    }
  }, [pendingFocus, entryIndex, hiddenCount, isMenuExpanded]);

  /* Warns once per tab when the overflow menu can only name a hidden tab by
   * its item: no `label`, no `aria-label`, no string children and no
   * element text. */
  const warnedValues = useRef(new Set<unknown>());

  useEffect(() => {
    if (process.env.NODE_ENV !== 'development') {
      return;
    }

    hiddenIndexes.forEach(index => {
      const tab = tabs[index]!;

      /* `rendered` comes from a committed measure, so a tab that only
       * briefly overflows (a new tab before the next measure) never warns. */
      if (rendered?.[index] !== true || warnedValues.current.has(tab.value)) {
        return;
      }

      if (getTabName(tab, getTabElement(index)) === undefined) {
        warnedValues.current.add(tab.value);
        // eslint-disable-next-line no-console
        console.warn(
          'Warning: a tab in <Tabs.TabList> moved into the overflow menu without a plain-text label. Set the `label` prop on <Tabs.Tab> so the overflow menu can name it.'
        );
      }
    });
  });

  if (!tabsPropGetters) {
    return (
      <StyledTabList
        ref={ref}
        {...restProps}
        data-garden-id={COMPONENT_IDS['tabs.tablist']}
        data-garden-version={PACKAGE_VERSION}
      />
    );
  }

  const { children, className, style, ...otherProps } = restProps;
  const tabListProps =
    tabsPropGetters.getTabListProps<HTMLDivElement>() as HTMLAttributes<HTMLDivElement>;
  /* On the server the list ref is null, so no element is found. */
  const tabElements = tabs.map((_tab, index) => getTabElement(index));
  const overflowLabel = getOverflowLabel(hiddenCount);
  /* The trigger carries the selection indicator for overflowed tabs, so its
   * name carries the selection too. */
  const triggerLabel = selectedHiddenTab
    ? getOverflowLabel(hiddenCount, getMenuLabel(selectedHiddenTab, tabElements[selectedIndex]))
    : overflowLabel;

  return (
    <StyledTabListContainer
      ref={containerRef}
      className={className}
      style={style}
      $isVertical={isVertical}
      data-garden-id={COMPONENT_IDS['tabs.tablist_container']}
      data-garden-version={PACKAGE_VERSION}
    >
      <StyledTabList
        $isVertical={isVertical}
        $extent={visibleExtent}
        {...tabListProps}
        {...otherProps}
        aria-label={ariaLabel}
        data-garden-id={COMPONENT_IDS['tabs.tablist']}
        data-garden-version={PACKAGE_VERSION}
        ref={mergeRefs([listRef, ref])}
      >
        {children}
      </StyledTabList>
      {hiddenCount > 0 && (
        <StyledTabOverflow ref={overflowRef}>
          <Menu
            /* eslint-disable-next-line react/no-unstable-nested-components --
               the `Menu` button API is a render function. */
            button={({ ref: buttonRef, ...triggerProps }) => {
              const trigger = (
                <StyledTabOverflowTrigger
                  {...(triggerProps as ButtonHTMLAttributes<HTMLButtonElement>)}
                  ref={mergeRefs([buttonRef, triggerRef])}
                  as="button"
                  aria-label={isVertical && !selectedHiddenTab ? undefined : triggerLabel}
                  /* The tooltip text is already in the name; it must not
                   * describe the trigger too. */
                  aria-describedby={undefined}
                  $isVertical={isVertical}
                  data-selected={selectedHiddenTab ? true : undefined}
                  data-garden-id={COMPONENT_IDS['tabs.overflow_button']}
                  data-garden-version={PACKAGE_VERSION}
                >
                  {isVertical ? (
                    overflowLabel
                  ) : (
                    <StyledTabOverflowCircle aria-hidden="true">
                      <DotsVerticalIcon />
                    </StyledTabOverflowCircle>
                  )}
                </StyledTabOverflowTrigger>
              );

              /* The icon-only trigger gets a tooltip with the count. */
              return isVertical ? trigger : <Tooltip content={overflowLabel}>{trigger}</Tooltip>;
            }}
            /* The menu renders in the document body: any overflow: hidden or
             * overflow: auto ancestor would squeeze it otherwise. */
            ref={menuRef}
            appendToNode={doc?.body}
            placement="bottom-end"
            isExpanded={isMenuExpanded}
            selectedItems={
              selectedHiddenTab ? [{ value: String(selectedIndex), name: menuGroup }] : []
            }
            onChange={({ isExpanded, selectedItems }) => {
              if (isExpanded !== undefined) {
                setIsMenuExpanded(isExpanded);
              }

              const selectedValue = selectedItems?.find(item => item.name === menuGroup)?.value;

              if (selectedValue !== undefined) {
                tabsPropGetters.select(tabs[Number(selectedValue)]!.value);
              }
            }}
          >
            <ItemGroup type="radio" aria-label={overflowLabel}>
              {hiddenTabs.map((tab, hiddenIndex) => {
                const index = hiddenIndexes[hiddenIndex]!;

                return (
                  <Item
                    key={index}
                    value={String(index)}
                    label={getMenuLabel(tab, tabElements[index])}
                    name={menuGroup}
                    icon={tab.props.icon}
                    isDisabled={tab.disabled}
                  >
                    {tab.props.children}
                  </Item>
                );
              })}
            </ItemGroup>
          </Menu>
        </StyledTabOverflow>
      )}
      {hiddenExtent !== undefined && (
        <StyledTabOverflowSpacer
          aria-hidden="true"
          $isVertical={isVertical}
          $size={hiddenExtent}
          data-garden-id={COMPONENT_IDS['tabs.overflow_spacer']}
          data-garden-version={PACKAGE_VERSION}
        />
      )}
      <StyledTabIndicator
        $isVertical={isVertical}
        aria-hidden="true"
        hidden={!indicator}
        ref={indicatorRef}
        data-garden-id={COMPONENT_IDS['tabs.indicator']}
        data-garden-version={PACKAGE_VERSION}
      />
    </StyledTabListContainer>
  );
});

TabList.displayName = 'Tabs.TabList';

TabList.propTypes = {
  renderOverflowLabel: PropTypes.func
};
