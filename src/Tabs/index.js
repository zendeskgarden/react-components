import React, { Children, Component, PropTypes } from 'react'
import classNames from 'classnames'

import PanelConfig from './PanelConfig'
import Label from './Label'
import Panel from './Panel'
import ReactSingleSelectionModel from '../utils/selection/ReactSingleSelectionModel'

import styles from './styles.css'

export default class Tabs extends Component {
  static Panel = PanelConfig

  static propTypes = {
    active: PropTypes.string,
    children: PropTypes.node.isRequired,
    dir: PropTypes.oneOf(['ltr', 'rtl']),
    onActivate: PropTypes.func,
    vertical: PropTypes.bool.isRequired,
    tabIndex: PropTypes.number,
    testId: PropTypes.string
  }

  static defaultProps = {
    dir: 'ltr',
    tabIndex: 0,
    vertical: false
  }

  constructor (props) {
    super(props)
    this.selectionModel = new ReactSingleSelectionModel({
      rtl: props.dir === 'rtl',
      vertical: props.vertical
    })
    this.selectionModel.onSelectionChanged = this.onSelectionChanged
    this.selectionModel.onValueChosen = props.onActivate
    this.keyboard = true
    this.state = {}
  }

  setSelectableItems ({ children, dir, active, vertical }) {
    const panelConfigs = []
    const labels = []

    Children.forEach(children, (child) => {
      if (child && child.type === PanelConfig) {
        const { disabled, id, label } = child.props
        panelConfigs.push(child.props)
        labels.push(
          <Label
            active={ id === active }
            disabled={ disabled }
            id={ id }
            key={ id }
            value={ id }
          >
            { label }
          </Label>
        )
      } else {
        labels.push(child)
      }
    })

    this.selectionModel.items = labels
    this.setState({ labels: this.selectionModel.items })
  }

  onSelectionChanged = () => {
    const labels = this.selectionModel.items
    this.setState({ labels })
  }

  updatePanel = ({ children, active }) => {
    const panelConfigs = []

    Children.forEach(children, (child) => {
      if (child && child.type === PanelConfig) {
        panelConfigs.push(child.props)
      }
    })

    const activePanelConfig = (
      panelConfigs.find(({ id }) => active === id) ||
      panelConfigs[0]
    )

    const updatePanel = (
      !this.state.panel ||
      active !== this.props.active
    )

    if (updatePanel) {
      const activePanelContent = activePanelConfig.children

      const panel = (
        <Panel id={ activePanelConfig.id }>
          {
            typeof activePanelContent === 'function'
              ? activePanelContent(activePanelConfig.id)
              : activePanelContent
          }
        </Panel>
      )

      this.setState({ panel })
    }
  }

  componentWillMount () {
    this.setSelectableItems(this.props)
    this.updatePanel(this.props)
  }

  componentWillReceiveProps = (nextProps) => {
    this.selectionModel.rtl = nextProps.dir === 'rtl'
    this.selectionModel.vertical = nextProps.vertical
    this.setSelectableItems(nextProps)
    this.updatePanel(nextProps)
  }

  render () {
    const {
      dir,
      tabIndex,
      testId,
      vertical
    } = this.props

    const { labels, panel } = this.state

    const props = {}
    if (testId) {
      props['data-test-id'] = testId
    }

    if (dir === 'rtl') {
      props.dir = dir
    }

    return (
      <nav
        className={ classNames(styles.tabs, {
          [styles.vertical]: vertical,
          [styles.rtl]: dir === 'rtl'
        }) }
        { ...props }
      >
        <ul
          className={ styles.list }
          onFocus={ () => {
            if (!this.selectionModel.hasSelection() && this.keyboard) {
              this.selectionModel.reactivate()
            }
            this.keyboard = true
          } }
          onMouseDown={ () => {
            this.keyboard = false
            setTimeout(() => {
              this.keyboard = true
            }, 0)
          } }
          onBlur={ this.selectionModel.clear }
          onKeyDown={ this.selectionModel.handleKeyDown }
          role='tablist'
          tabIndex={ tabIndex }
        >
          { labels }
        </ul>
        { panel }
      </nav>
    )
  }
}
