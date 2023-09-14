import {
  Box,
  Button,
  Card,
  PasswordInput,
  Stack,
  TextInput,
} from '@mantine/core';
import { matches, useForm } from '@mantine/form';
import { obs } from '../../lib/obs.ts';
import { ConnectFormState } from './Login.type.ts';

export const Login = () => {
  const form = useForm<ConnectFormState>({
    initialValues: {
      url: 'ws://localhost:4455',
      password: '',
    },
    validate: {
      url: matches(
        /^(wss?:\/\/)([0-9]{1,3}(?:\.[0-9]{1,3}){3}|[a-zA-Z]+):([0-9]{1,5})$/,
        'Invalid WebSocket URL',
      ),
    },
  });

  const handleConnect = async ({ password, url }: ConnectFormState) => {
    await obs.get().connect(url, password);
  };

  return (
    <Card>
      <Box component="form" onSubmit={form.onSubmit(handleConnect)}>
        <Stack>
          <TextInput
            label="Websocket url"
            placeholder="ws://localhost:4455"
            {...form.getInputProps('url')}
          />
          <PasswordInput
            label="Password"
            description="Leave empty if you have disabled authentication"
            {...form.getInputProps('password')}
          />
          <Button type="submit">Connect</Button>
        </Stack>
      </Box>
    </Card>
  );
};
