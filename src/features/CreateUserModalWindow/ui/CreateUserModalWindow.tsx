import { CreateUserForm } from "@/features/CreateUserForm";
import { Button } from "@/shared/ui/button";
import { ModalWindow } from "@/shared/ui/ModalWindow";

export const CreateUserModalWindow = () => {
  return (
    <ModalWindow>
      <ModalWindow.Trigger>
        <Button>Create user</Button>
      </ModalWindow.Trigger>

      <ModalWindow.Content title='Create User'>
        {({ close }) => (
          <>
            <CreateUserForm
              onSubmit={(data) => {
                console.log("Данные формы:", data);
                close();
              }}
              defaultValues={{
                firstName: "",
                lastName: "",
                email: "",
              }}
              isLoading={false}
            />
          </>
        )}
      </ModalWindow.Content>
    </ModalWindow>
  );
};
