

export const particlesSetting =  {
    "particles": {
        "number": {
            "value": 6,
            "density": {
                "enable": true,
                "value_area": 800
            }

        },
        "move": {
            "speed": 0,
            "out_mode": "out",
            "bounce": "true",
            "random":false,
            "straight":true,
            "attract":{"enable":true,"rotateX":1200,"rotateY":1200}
        },
        "shape": {
            "type":"square",
        },
        "color": {
            "value": ["#0e5a2c","#a55859", "#176ba0"]
        },
        "polygon":{"nb_sides":5},
        "opacity": {
            "value": 0.431212121122,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 0.2,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 200,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 0,
                "size_min": 0.9,
                "sync": false
            }
        }
    },

    "retina_detect": true
}
