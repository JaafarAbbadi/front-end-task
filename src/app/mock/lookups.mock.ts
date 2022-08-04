import { Lookup } from "../types/Lookup.type";

export const LOOKUPS: Lookup[] = [
    {
        label: 'root',
        value: 'root',
        children: [
            {
                label: 'child1',
                value: 'child1',
                children: [
                    {
                        label: 'child1.1',
                        value: 'child1.1',
                        children: [
                            {
                                label: 'child1.1.1',

                                value: 'child1.1.1',
                                children: [
                                    {
                                        label: 'child1.1.1.1',
                                        value: 'child1.1.1.1',
                                        children: []
                                    },
                                    {
                                        label: 'child1.1.1.2',
                                        value: 'child1.1.1.2',
                                        children: []
                                    },
                                ]
                            },
                            {
                                label: 'child1.1.2',
                                value: 'child1.1.2',
                                children: [
                                    {
                                        label: 'child1.1.2.1',
                                        value: 'child1.1.2.1',
                                        children: []
                                    },
                                    {
                                        label: 'child1.1.2.2',
                                        value: 'child1.1.2.2',
                                        children: []
                                    },
                                ]
                            },
                        ]
                    },
                    {
                        label: 'child1.2',
                        value: 'child1.2',
                        children: [
                            {
                                label: 'child1.2.1',
                                value: 'child1.2.1',
                                children: [
                                    {
                                        label: 'child1.2.1.1',
                                        value: 'child1.2.1.1',
                                        children: []
                                    },
                                    {
                                        label: 'child1.2.1.2',
                                        value: 'child1.2.1.2',
                                        children: []
                                    },
                                ]
                            },
                            {
                                label: 'child1.2.2',
                                value: 'child1.2.2',
                                children: [
                                    {
                                        label: 'child1.2.2.1',
                                        value: 'child1.2.2.1',
                                        children: []
                                    },
                                ]
                            },
                        ]
                    }
                ]
            },
        ]
    }
];
