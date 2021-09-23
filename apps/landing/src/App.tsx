import "./App.css";
import { Typography, Button, Stack } from "@renus/components";
import { Receipt, ReminderIcon } from "@renus/icons";
import { User } from "@renus/types";
import { isValidEmail } from "@renus/utils";

function App() {
  const user: User = {
    email: "email@test.com",
    firstName: "Agent",
    lastName: "Smith ",
  };
  return (
    <Stack>
      <Typography variant="h1">Lerna POC</Typography>
      <Typography variant="body1">Components from @renus/components</Typography>
      <Typography variant="body1">And Icons from @renus/icons</Typography>
      <Receipt />
      <ReminderIcon />
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <Button
        onClick={() => console.log(isValidEmail(user.email))}
        variant="outlined"
        color="primary"
      >
        Click me!!
      </Button>
    </Stack>
  );
}

export default App;
