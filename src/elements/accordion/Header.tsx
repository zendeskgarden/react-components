/**
 * Copyright Zendesk, Inc.
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import { composeEventHandlers } from '@zendeskgarden/container-utilities';
import ChevronDown from '@zendeskgarden/svg-icons/src/chevron-down.svg';
import {
  Children,
  Fragment,
  MouseEvent,
  ReactNode,
  cloneElement,
  forwardRef,
  HTMLAttributes,
  isValidElement,
  useMemo,
  useRef,
  useState
} from 'react';

import { HeaderProvider } from '../../context/accordion/HeaderContext';
import { useAccordionContext } from '../../hooks/accordion/useAccordionContext';
import { useSectionContext } from '../../hooks/accordion/useSectionContext';
import { isGardenType } from '../../utils/shared/gardenType';
import { StyledHeader } from '../../views/accordion/StyledHeader';
import { StyledHeaderRow } from '../../views/accordion/StyledHeaderRow';
import { StyledRotateIcon } from '../../views/accordion/StyledRotateIcon';
import { COMPONENT_IDS } from '../utils';

/*
 * Splits the header children into heading content and `Accordion.Actions`,
 * also looking inside fragments. Children lifted out of a fragment are
 * re-keyed with the fragment's key as a prefix, so keys don't collide with
 * top-level children.
 */
const splitChildren = (children: ReactNode) => {
  const headingChildren: ReactNode[] = [];
  const actions: ReactNode[] = [];

  Children.toArray(children).forEach(child => {
    if (isValidElement<{ children?: ReactNode }>(child) && child.type === Fragment) {
      Children.toArray(child.props.children).forEach(fragmentChild => {
        const keyedChild = isValidElement(fragmentChild)
          ? cloneElement(fragmentChild, { key: `${child.key}${fragmentChild.key}` })
          : fragmentChild;

        if (isGardenType(keyedChild, COMPONENT_IDS['accordions.actions'])) {
          actions.push(keyedChild);
        } else {
          headingChildren.push(keyedChild);
        }
      });
    } else if (isGardenType(child, COMPONENT_IDS['accordions.actions'])) {
      actions.push(child);
    } else {
      headingChildren.push(child);
    }
  });

  return { headingChildren, actions };
};

const HeaderComponent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>((props, ref) => {
  const { onClick, onMouseOver, onMouseOut, role, children, ...other } = props;
  const {
    level: ariaLevel,
    isCompact,
    isCollapsible,
    isWell,
    getHeaderProps,
    getTriggerProps,
    expandedSections
  } = useAccordionContext();
  const sectionValue = useSectionContext();
  const [isHovered, setIsHovered] = useState(false);
  const [descriptionId, setDescriptionId] = useState<string>();
  const actionEventRef = useRef<Event | null>(null);
  const isExpanded = expandedSections.includes(sectionValue);
  /**
   *  Pressing the space key on a button triggers the `onTriggerClick` callback.
   * `onKeyDown` is plucked out and not passed to the Label (button) element
   * to prevent double invocations of the click event.
   */
  const {
    onClick: onTriggerClick,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onKeyDown,
    ...otherTriggerProps
  } = getTriggerProps({
    type: 'button',
    value: sectionValue
  });

  const value = useMemo(
    () => ({
      isHovered,
      otherTriggerProps,
      descriptionId,
      setDescriptionId,
      actionEventRef
    }),
    [isHovered, otherTriggerProps, descriptionId, setDescriptionId, actionEventRef]
  );

  const { headingChildren, actions } = useMemo(() => splitChildren(children), [children]);
  /* The row is always rendered in well mode, so the DOM shape never changes
   * at runtime; otherwise only when an `Accordion.Actions` is found. */
  const hasRow = !!isWell || actions.length > 0;

  /* The header skips the toggle for events `Actions` recorded; a consumer
   * `preventDefault()` still cancels it. */
  const handleToggleClick = (event: MouseEvent<HTMLDivElement>) => {
    if (event.defaultPrevented || event.nativeEvent === actionEventRef.current) {
      return;
    }

    onTriggerClick?.(event);
  };

  if (!hasRow) {
    return (
      <HeaderProvider value={value}>
        <StyledHeader
          $isCollapsible={isCollapsible}
          $isExpanded={isExpanded}
          {...(getHeaderProps({
            ref,
            'aria-level': ariaLevel,
            role: role === undefined || role === null ? role : 'heading',
            onClick: composeEventHandlers(onClick, handleToggleClick),
            onMouseOver: composeEventHandlers(onMouseOver, () => setIsHovered(true)),
            onMouseOut: composeEventHandlers(onMouseOut, () => setIsHovered(false)),
            ...other
          }) as HTMLAttributes<HTMLDivElement>)}
          data-garden-id={COMPONENT_IDS['accordions.header']}
          data-garden-version={PACKAGE_VERSION}
        >
          {children}
          <StyledRotateIcon
            $isCompact={isCompact}
            $isHovered={isHovered}
            $isRotated={isExpanded}
            $isCollapsible={isCollapsible}
            onMouseOver={composeEventHandlers(onMouseOver, () => setIsHovered(true))}
            onMouseOut={composeEventHandlers(onMouseOut, () => setIsHovered(false))}
            data-garden-id={COMPONENT_IDS['accordions.rotate_icon']}
            data-garden-version={PACKAGE_VERSION}
          >
            <ChevronDown />
          </StyledRotateIcon>
        </StyledHeader>
      </HeaderProvider>
    );
  }

  return (
    <HeaderProvider value={value}>
      <StyledHeaderRow
        $isWell={isWell}
        $isCollapsible={isCollapsible}
        $isExpanded={isExpanded}
        onClick={handleToggleClick}
        onMouseOver={event => setIsHovered(event.nativeEvent !== actionEventRef.current)}
        onMouseOut={() => setIsHovered(false)}
        data-garden-id={COMPONENT_IDS['accordions.header_row']}
        data-garden-version={PACKAGE_VERSION}
      >
        <StyledHeader
          $isCollapsible={isCollapsible}
          $isExpanded={isExpanded}
          $hasRow
          $isWell={isWell}
          {...(getHeaderProps({
            ref,
            'aria-level': ariaLevel,
            role: role === undefined || role === null ? role : 'heading',
            onClick,
            onMouseOver,
            onMouseOut,
            ...other
          }) as HTMLAttributes<HTMLDivElement>)}
          data-garden-id={COMPONENT_IDS['accordions.header']}
          data-garden-version={PACKAGE_VERSION}
        >
          {headingChildren}
        </StyledHeader>
        {actions}
        <StyledRotateIcon
          $isCompact={isCompact}
          $isHovered={isHovered}
          $isRotated={isExpanded}
          $isCollapsible={isCollapsible}
          $isWell={isWell}
          data-garden-id={COMPONENT_IDS['accordions.rotate_icon']}
          data-garden-version={PACKAGE_VERSION}
        >
          <ChevronDown />
        </StyledRotateIcon>
      </StyledHeaderRow>
    </HeaderProvider>
  );
});

HeaderComponent.displayName = 'Accordion.Header';

/**
 * @extends HTMLAttributes<HTMLDivElement>
 */
export const Header = HeaderComponent;
