/// <reference types="react" />

declare module '@zendesk/garden-react-notifications' {
  export import Alert = __GARDEN.Alert;
  export import Notification = __GARDEN.Notification;
  export import Well = __GARDEN.Well;
  export import Close = __GARDEN.Close;
  export import Paragraph = __GARDEN.Paragraph;
  export import Title = __GARDEN.Title;
}

declare module '@zendesk/garden-react-notifications/Alert' {
  import Alert = __GARDEN.Alert;
  export default Alert;
}

declare module '@zendesk/garden-react-notifications/Notification' {
  import Notification = __GARDEN.Notification;
  export default Notification;
}

declare module '@zendesk/garden-react-notifications/Well' {
  import Well = __GARDEN.Well;
  export default Well;
}

declare module '@zendesk/garden-react-notifications/Close' {
  import Close = __GARDEN.Close;
  export default Close;
}

declare module '@zendesk/garden-react-notifications/Paragraph' {
  import Paragraph = __GARDEN.Paragraph;
  export default Paragraph;
}

declare module '@zendesk/garden-react-notifications/Title' {
  import Title = __GARDEN.Title;
  export default Title;
}

declare namespace __GARDEN {
  export enum ValidationTypes {
    SUCCESS = "success",
    WARNING = "warning",
    ERROR = "error"
  }

  export interface AlertProps {
    recessed?: boolean;
    floating?: boolean;
    type: ValidationTypes;
  }

  export class Alert extends React.Component<AlertProps & React.HTMLProps<HTMLDivElement>> {}

  export interface NotificationProps {
    recessed?: boolean;
    type?: ValidationTypes;
  }

  export class Notification extends React.Component<NotificationProps & React.HTMLProps<HTMLDivElement>> {}

  export interface WellProps {
    recessed?: boolean;
    floating?: boolean;
  }

  export class Well extends React.Component<WellProps & React.HTMLProps<HTMLDivElement>> {}

  export interface CloseProps {
    focused?: boolean;
    hovered?: boolean;
  }

  export class Close extends React.Component<CloseProps & React.HTMLProps<HTMLButtonElement>> {}

  export class Paragraph extends React.Component<React.HTMLProps<HTMLDivElement>> {}

  export class Title extends React.Component<React.HTMLProps<HTMLDivElement>> {}
}
