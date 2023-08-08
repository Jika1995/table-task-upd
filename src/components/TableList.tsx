import { useFetchReportById } from '@/services/fetchReportById';
import { HeaderObj } from '@/utils/types';
import { Container, Group, Loader, ScrollArea, Stack, Table, Text } from '@mantine/core';
import { log } from 'console';
import React, { useState } from 'react';

type Props = {
    reportId: string | null
}

const TableList = ({ reportId }: Props) => {

    const [report] = useFetchReportById({ id: reportId ?? '' }, { enabled: Boolean(reportId) });

    // const rows = report?.data.map((element, elemIdx) => (
    //     <tr key={elemIdx} className={`duration-300 cursor-pointer bg-cyan-100 hover:bg-cyan-50 hover:scale-105`}>
    //         {element.map((item, itemIdx) => {
    //             return (
    //                 <td key={itemIdx}
    //                     className={`text-${findAlignment(itemIdx)} py-3 px-6 font-semibold w-44 
    //                  ${typeof item === 'object' ? ' text-amber-300' : ''}`}
    //                 // style={{ textAlign: `${findAlignment(itemIdx)}` }}
    //                 >
    //                     {typeof item === 'object' ? item.d : item}
    //                 </td>
    //             )
    //         }
    //         )}
    //     </tr >
    // ));

    const findAlignment = (itemIdx: number) => {
        if (!report) return null

        const findHeaderObj = report.header[itemIdx];
        // console.log(findHeaderObj);

        if (findHeaderObj.align) {
            return `text-${findHeaderObj.align}`
        } else {
            if (findHeaderObj.type === "float") {
                return 'text-right'
            } else if (findHeaderObj.type === "string") {
                return 'text-left'
            } else if (findHeaderObj.type === "boolean") {
                return 'text-center'
            } else {
                return 'text-left'
            }
        }
    }


    // text-${findAlignment(itemIdx)}
    return (
        <ScrollArea>
            <Stack>

                <table className='shadow-xl border-collapse border-2 border-cyan-900 overflow-hidden ' >
                    <thead className='text-white bg-cyan-800'>
                        <tr>
                            {
                                report?.header.map((item) => (
                                    <th
                                        className={'p-4 whitespace-nowrap w-44 border '}
                                        key={item.id}
                                    >{item.caption}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody className=' text-cyan-900 '>{report?.data.map((element, elemIdx) => (
                        <tr key={elemIdx} className={`duration-300 cursor-pointer bg-cyan-100 hover:bg-cyan-50 hover:scale-105`}>
                            {element.map((item, itemIdx) => {
                                return (
                                    <td key={itemIdx}
                                        className={` ${findAlignment(itemIdx)} py-3 px-6 font-semibold w-44 border
                     ${typeof item === 'object' ? ' text-amber-300' : ''}`}
                                    // style={{ textAlign: `${findAlignment(itemIdx)}` }}
                                    >
                                        {typeof item === 'object' ? item.d : item}
                                    </td>
                                )
                            }
                            )}
                        </tr >
                    ))}</tbody>
                </table>
            </Stack>
        </ScrollArea>
    )
}

export default TableList