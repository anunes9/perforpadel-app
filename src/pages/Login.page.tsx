import { TextInput, PasswordInput, Checkbox, Anchor, Paper, Text, Container, Group, Button, Image } from "@mantine/core"
import Logo from "../assets/logo.svg"

export const LoginPage = () => (
    <Container size={420} my={40}>
        <Image src={Logo} />

        <Text c="dimmed" size="sm" ta="center" mt="2rem">
            Do not have an account?{" "}
            <Anchor size="sm" component="button">
                Get in contact
            </Anchor>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
            <TextInput label="Email" placeholder="coach@perforpadel.com" required />

            <PasswordInput label="Password" placeholder="******" required mt="md" />

            <Group justify="space-between" mt="lg">
                <Checkbox label="Remember me" />
                <Anchor component="button" size="sm">
                    Forgot password?
                </Anchor>
            </Group>

            <Button fullWidth mt="xl">
                Sign in
            </Button>
        </Paper>
    </Container>
)
