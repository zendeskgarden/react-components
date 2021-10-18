import { useCallback, useMemo, useState } from "react";
import { composeEventHandlers } from "@zendeskgarden/container-utilities";

export const useSheet = ({ isOpen, onClose }: any) => {
  // TODO: generate ids
  const [labelId] = useState("title-id");
  const [descriptionId] = useState("description-id");

  const getTitleProps = useCallback((props) => ({ ...props, id: labelId }), [
    labelId
  ]);

  const getDescriptionProps = useCallback(
    (props) => ({ ...props, id: descriptionId }),
    [descriptionId]
  );

  const getCloseButtonProps = useCallback(
    ({ onClick, ...other }) => {
      return {
        "aria-expanded": `${isOpen}`,
        "aria-label": "Close Side Sheet",
        onClick: composeEventHandlers(onClick, (event: any) => {
          onClose && onClose(event);
        }),
        ...other
      };
    },
    [onClose, isOpen]
  );

  const getSheetProps = useCallback((props: any) => ({
    "aria-labelledby": labelId,
    "aria-describedby": descriptionId,
    ...props
  }), [labelId, descriptionId]);

  return useMemo(
    () => ({
      getTitleProps,
      getDescriptionProps,
      getSheetProps,
      getCloseButtonProps
    }),
    [getTitleProps, getDescriptionProps, getCloseButtonProps, getSheetProps]
  );
}
