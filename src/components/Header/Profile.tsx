import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex
            align="center"
        >
            <Box mr="4" textAlign="right">
                <Text>Felipe Tacara</Text>
                <Text
                    color="gray.300"
                	fontSize="small"
                >
                    felipetacara@gmail.com
                </Text>
            </Box>
            <Avatar size="md" name="Felipe Tacara" src="https://github.com/felipetacara.png"/>
        </Flex>
    );
}