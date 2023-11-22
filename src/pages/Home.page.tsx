import { Overlay, Container, Title, Button, Text, Anchor, Image, Flex } from "@mantine/core"
import LogoSmall from "../assets/logo-small.png"
import { useNavigate } from "react-router-dom"

export const HomePage = () => {
    const navigate = useNavigate()

    return (
        <div className="bg-cover bg-center relative h-screen bg-hero-image">
            <Overlay
                gradient="linear-gradient(180deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, .65) 80%)"
                opacity={1}
                zIndex={0}
            />

            <div className="h-screen flex flex-col justify-between">
                <Container className="flex flex-col justify-end items-start z-10 relative" size="md" mt="4rem">
                    <Title className="text-md md:text-5xl lg:text-7xl font-russo text-primary">PerforPadel App</Title>
                    {/* <Image radius="md" src={Logo} w="48rem" /> */}

                    <Text className="text-white lg:w-3/4 lg:text-xl xl:text-2xl" mt="xl">
                        PerforPadel is an application that allows a padel coach to register, measure and analyze players
                        performance in a match for different padel levels.
                    </Text>

                    <Text className="text-white lg:w-3/4 lg:text-xl xl:text-2xl" mt="xl">
                        It allows to register ball position and shots during a match to analyze each play.
                    </Text>

                    <Button variant="outline" radius="xl" mt="4rem" size="lg">
                        Get in contact
                    </Button>

                    <Text className="text-white/75 text-xl mt-4">
                        Already have an account?
                        <Anchor className="text-xl underline ml-2" onClick={() => navigate("/login")}>
                            Sign up
                        </Anchor>
                    </Text>
                </Container>

                <Footer />
            </div>
        </div>
    )
}

const links = [
    { link: "#", label: "Contact" },
    { link: "#", label: "Privacy" },
    { link: "#", label: "Fran Padel Project" },
]

export function Footer() {
    const items = links.map((link) => (
        <Anchor<"a">
            c="dimmed"
            key={link.label}
            href={link.link}
            onClick={(event) => event.preventDefault()}
            size="md"
            className="text-bold"
        >
            {link.label}
        </Anchor>
    ))

    return (
        <div className="relative bg-gradient-to-b from-white/0 to-gray-900">
            <Container className="flex justify-between items-center h-32 sm:h-12">
                <Image radius="md" src={LogoSmall} h="2rem" w="2rem" />
                <Flex
                    direction={{ base: "column", sm: "row" }}
                    gap={{ base: "sm", sm: "lg" }}
                    justify={{ sm: "center" }}
                >
                    {items}
                </Flex>
            </Container>
        </div>
    )
}
