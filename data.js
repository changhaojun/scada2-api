const datas = {
    scada_id: '',
	app_id: '',
    scada_name: '',
	camera_alpha: 'number',
	camera_beta: 'number',
	camera_radius: 'number',
	camera_target: 'number[]',
    buildings: [
        {
            building_name: 'string',
            floor_count: 'number',
            unit_number: 'number',
            position: '[number, number, number]',
            rotation: '[number, number, number]',
            floors: [
                {
                    rooms: [
                        {
                            room_number: 'string',
                            size: '[number, number, number]',
                            offset: '[number, number, number]'
                        },
                        {
                            room_number: 'string',
                            size: '[number, number, number]',
                            offset: '[number, number, number]'
                        },
                        {
                            room_number: 'string',
                            size: '[number, number, number]',
                            offset: '[number, number, number]'
                        }
                    ],
                    size: '[number, number, number]'
                },
                {
                    rooms: [
                        {
                            room_number: 'string',
                            size: '[number, number, number]',
                            offset: '[number, number, number]'
                        },
                        {
                            room_number: 'string',
                            size: '[number, number, number]',
                            offset: '[number, number, number]'
                        },
                        {
                            room_number: 'string',
                            size: '[number, number, number]',
                            offset: '[number, number, number]'
                        }
                    ],
                    size: '[number, number, number]'
                }
            ]
        },
        {
            building_name: 'string',
            floor_count: 'number',
            unit_number: 'number',
            position: '[number, number, number]',
            rotation: '[number, number, number]',
            floors: [
                {
                    rooms: [
                        {
                            room_number: 'string',
                            size: '[number, number, number]',
                            offset: '[number, number, number]'
                        },
                        {
                            room_number: 'string',
                            size: '[number, number, number]',
                            offset: '[number, number, number]'
                        },
                        {
                            room_number: 'string',
                            size: '[number, number, number]',
                            offset: '[number, number, number]'
                        }
                    ],
                    size: '[number, number, number]'
                },
                {
                    rooms: [
                        {
                            room_number: 'string',
                            size: '[number, number, number]',
                            offset: '[number, number, number]'
                        },
                        {
                            room_number: 'string',
                            size: '[number, number, number]',
                            offset: '[number, number, number]'
                        },
                        {
                            room_number: 'string',
                            size: '[number, number, number]',
                            offset: '[number, number, number]'
                        }
                    ],
                    size: '[number, number, number]'
                }
            ]
        }
    ],
    models: [
        {
            name: 'add__arrow_red',
            scaling: '[number, number, number]',
            position: '[number, number, number]',
            rotation: '[number, number, number]',
            rotationQuaternion: '[number, number, number ,number] | null',
            size: [96.07220000000001, 46.8464, 7.77826]
        },
        {
            name: 'add__arrow_red-1',
            scaling: '[number, number, number]',
            position: '[number, number, number]',
            rotation: '[number, number, number]',
            rotationQuaternion: '[number, number, number, number] | null',
            size: [96.07220000000001, 46.8464, 7.77826]
        }
    ]
}