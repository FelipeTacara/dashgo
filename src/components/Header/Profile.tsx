import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
    return (
        <Flex
            align="center"
        >
            {showProfileData && (<Box mr="4" textAlign="right">
                <Text>Felipe Tacara</Text>
                <Text
                    color="gray.300"
                    fontSize="small"
                >
                    felipetacara@gmail.com
                </Text>
            </Box>)}
            <Avatar size="md" name="Felipe Tacara" src="https://github.com/felipetacara.png" />
        </Flex>
    );
}