import {
  ButtonGroup,
  Flex,
  IconButton,
  useEditableControls,
} from "@chakra-ui/react";
import { FaCheck, FaEdit } from "react-icons/fa";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineClose } from "react-icons/md";

function EditableControls() {
  const {
    isEditing,
    getSubmitButtonProps,
    getCancelButtonProps,
    getEditButtonProps,
  } = useEditableControls();

  return isEditing ? (
    <ButtonGroup justifyContent="center" size="sm">
      <IconButton
        aria-label=""
        icon={<FaCheck />}
        {...getSubmitButtonProps()}
      />
      <IconButton
        aria-label=""
        icon={<MdOutlineClose fontSize="20px" />}
        {...getCancelButtonProps()}
      />
    </ButtonGroup>
  ) : (
    <Flex justifyContent="center">
      <IconButton
        aria-label=""
        size="sm"
        icon={<FaEdit />}
        {...getEditButtonProps()}
      />
    </Flex>
  );
}

export default EditableControls;
