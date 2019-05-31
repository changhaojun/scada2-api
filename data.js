const datas = {
    scada_id: '',
	app_id: '',
    scada_name: '',
    scada_describe: "",
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
            "name_en": "add__arrow_red",
            "name_cn": "箭头-红",
            "scaling": [0.2301000861033259, 0.1, 0.1],
            "position": [0, 17.72244986481005, 0],
            "rotation": [-1.7449833416124745, 0, 0],
            "rotationQuaternion": [-0.7659332582082387, 0, 0, 0.6429200914347853],
            "size": [96.07220000000001, 46.8464, 7.77826]
        },
        {
            "name_en": "add__arrow_red-1",
            "name_cn": "箭头-红-1",
            "scaling": [0.1, 0.1, 0.1],
            "position": [0, 5.942251663478409, -21.476855223888137],
            "rotation": [-0, 0, -0],
            "rotationQuaternion": [0, 0, 0, 1],
            "size": [96.07220000000001, 46.8464, 7.77826]
        }
    ]
}