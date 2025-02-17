import { IconButton } from "@chakra-ui/react";
import { CgMoreVertical } from "react-icons/cg";

interface ActionButtonProps {
  onClick?: () => void;
}
export const ActionButton: React.FC<ActionButtonProps> = ({ onClick }) => {
  return (
    <IconButton
      aria-label="More options"
      asChild={true}
      width="32px"
      height="32px"
      background="transparent"
      _hover={{ background: "gray.100" }}
      _active={{ background: "gray.200" }}
      _focus={{ boxShadow: "none" }}
      onClick={onClick}>
      <CgMoreVertical size={20} />
    </IconButton>
  );
};
