import TableList from "@/components/TableList";
import { useFetchReports } from "@/services/fetchReports";
import { Container, Group, Loader, Select, Text } from "@mantine/core";
import { useEffect, useState } from "react";

export default function Home() {

    const [reports, { isLoading }] = useFetchReports();
    const [value, setSelectedValue] = useState<string | null>(null);
    const [reportId, setReportId] = useState<string | null>('')

    useEffect(() => {
        setReportId(value)
    }, [value])

    if (!reports) return null

    return (

        <Container p='xl'>
            <div className="w-60">
                {isLoading && (
                    <Group position="center">
                        <Loader size={20} />
                        <Text>Загрузка...</Text>
                    </Group>
                )}
                {
                    !value && (
                        <Text>Choose a report to see</Text>
                    )
                }
                <Select
                    placeholder="Choose project's year"
                    data={reports.map((item) => (
                        {
                            value: item.id,
                            label: item.report_name
                        }
                    ))}
                    my='lg'
                    size='sm'
                    searchable
                    nothingFound="No options"
                    radius='md'
                    value={value}
                    onChange={setSelectedValue}
                />
            </div>
            <TableList reportId={reportId} />
        </Container>

    )
}