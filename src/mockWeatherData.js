// For development purposes
// Would need to replace with more current example once this is outdated
// The `mockData` object was captured from `openWeatherData` in `src/components/Forecast/index.js`

const mockData = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1724036400,
      main: {
        temp: 294.99,
        feels_like: 295.63,
        temp_min: 294.99,
        temp_max: 298.56,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 92,
        temp_kf: -3.57,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 75,
      },
      wind: {
        speed: 5.02,
        deg: 185,
        gust: 8.33,
      },
      visibility: 3865,
      pop: 1,
      rain: {
        "3h": 10.97,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-19 03:00:00",
    },
    {
      dt: 1724047200,
      main: {
        temp: 295.75,
        feels_like: 296.39,
        temp_min: 295.75,
        temp_max: 297.27,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1005,
        humidity: 89,
        temp_kf: -1.52,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 72,
      },
      wind: {
        speed: 3.45,
        deg: 243,
        gust: 5.94,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 3.08,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-19 06:00:00",
    },
    {
      dt: 1724058000,
      main: {
        temp: 296.14,
        feels_like: 296.74,
        temp_min: 296.14,
        temp_max: 296.72,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1004,
        humidity: 86,
        temp_kf: -0.58,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 3.38,
        deg: 251,
        gust: 5.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-19 09:00:00",
    },
    {
      dt: 1724068800,
      main: {
        temp: 296.69,
        feels_like: 297.16,
        temp_min: 296.69,
        temp_max: 296.69,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 79,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 67,
      },
      wind: {
        speed: 3.3,
        deg: 250,
        gust: 4.56,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-19 12:00:00",
    },
    {
      dt: 1724079600,
      main: {
        temp: 299.57,
        feels_like: 299.57,
        temp_min: 299.57,
        temp_max: 299.57,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 63,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.96,
        deg: 242,
        gust: 5.6,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-19 15:00:00",
    },
    {
      dt: 1724090400,
      main: {
        temp: 302.08,
        feels_like: 303.35,
        temp_min: 302.08,
        temp_max: 302.08,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 1004,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 73,
      },
      wind: {
        speed: 4.85,
        deg: 239,
        gust: 6.22,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-19 18:00:00",
    },
    {
      dt: 1724101200,
      main: {
        temp: 301.66,
        feels_like: 302.75,
        temp_min: 301.66,
        temp_max: 301.66,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 1003,
        humidity: 55,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 53,
      },
      wind: {
        speed: 7.19,
        deg: 267,
        gust: 8.49,
      },
      visibility: 10000,
      pop: 0.01,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-19 21:00:00",
    },
    {
      dt: 1724112000,
      main: {
        temp: 297.63,
        feels_like: 297.94,
        temp_min: 297.63,
        temp_max: 297.63,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 1005,
        humidity: 69,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 34,
      },
      wind: {
        speed: 7.38,
        deg: 311,
        gust: 7.62,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-20 00:00:00",
    },
    {
      dt: 1724122800,
      main: {
        temp: 293.9,
        feels_like: 293.91,
        temp_min: 293.9,
        temp_max: 293.9,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 72,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 15,
      },
      wind: {
        speed: 6.53,
        deg: 314,
        gust: 7.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-20 03:00:00",
    },
    {
      dt: 1724133600,
      main: {
        temp: 292.39,
        feels_like: 292.33,
        temp_min: 292.39,
        temp_max: 292.39,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 75,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 56,
      },
      wind: {
        speed: 5.79,
        deg: 321,
        gust: 6.22,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-20 06:00:00",
    },
    {
      dt: 1724144400,
      main: {
        temp: 292.81,
        feels_like: 292.74,
        temp_min: 292.81,
        temp_max: 292.81,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 1006,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.86,
        deg: 339,
        gust: 4.87,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-20 09:00:00",
    },
    {
      dt: 1724155200,
      main: {
        temp: 292.08,
        feels_like: 291.88,
        temp_min: 292.08,
        temp_max: 292.08,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 1009,
        humidity: 71,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.19,
        deg: 312,
        gust: 4.08,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.14,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-20 12:00:00",
    },
    {
      dt: 1724166000,
      main: {
        temp: 292.35,
        feels_like: 292.05,
        temp_min: 292.35,
        temp_max: 292.35,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4,
        deg: 334,
        gust: 5.06,
      },
      visibility: 10000,
      pop: 0.2,
      rain: {
        "3h": 0.1,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-20 15:00:00",
    },
    {
      dt: 1724176800,
      main: {
        temp: 297.25,
        feels_like: 296.79,
        temp_min: 297.25,
        temp_max: 297.25,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 1009,
        humidity: 41,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 83,
      },
      wind: {
        speed: 3.33,
        deg: 326,
        gust: 5.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-20 18:00:00",
    },
    {
      dt: 1724187600,
      main: {
        temp: 298.4,
        feels_like: 297.92,
        temp_min: 298.4,
        temp_max: 298.4,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 1010,
        humidity: 36,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 6.53,
        deg: 312,
        gust: 6.41,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-20 21:00:00",
    },
    {
      dt: 1724198400,
      main: {
        temp: 294.62,
        feels_like: 294.02,
        temp_min: 294.62,
        temp_max: 294.62,
        pressure: 1013,
        sea_level: 1013,
        grnd_level: 1012,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 9.67,
        deg: 316,
        gust: 9.51,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-21 00:00:00",
    },
    {
      dt: 1724209200,
      main: {
        temp: 291.01,
        feels_like: 290.26,
        temp_min: 291.01,
        temp_max: 291.01,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1014,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 6.96,
        deg: 326,
        gust: 8.48,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-21 03:00:00",
    },
    {
      dt: 1724220000,
      main: {
        temp: 289.33,
        feels_like: 288.62,
        temp_min: 289.33,
        temp_max: 289.33,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1014,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 5.7,
        deg: 307,
        gust: 6.39,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-21 06:00:00",
    },
    {
      dt: 1724230800,
      main: {
        temp: 288.18,
        feels_like: 287.49,
        temp_min: 288.18,
        temp_max: 288.18,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 1014,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 5.88,
        deg: 303,
        gust: 7.26,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-21 09:00:00",
    },
    {
      dt: 1724241600,
      main: {
        temp: 288.32,
        feels_like: 287.64,
        temp_min: 288.32,
        temp_max: 288.32,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 67,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 5.45,
        deg: 306,
        gust: 6.82,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-21 12:00:00",
    },
    {
      dt: 1724252400,
      main: {
        temp: 292.17,
        feels_like: 291.43,
        temp_min: 292.17,
        temp_max: 292.17,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1016,
        humidity: 50,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 2,
      },
      wind: {
        speed: 4.91,
        deg: 294,
        gust: 6.83,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-21 15:00:00",
    },
    {
      dt: 1724263200,
      main: {
        temp: 293.95,
        feels_like: 293.23,
        temp_min: 293.95,
        temp_max: 293.95,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 36,
      },
      wind: {
        speed: 7.2,
        deg: 285,
        gust: 7.72,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-21 18:00:00",
    },
    {
      dt: 1724274000,
      main: {
        temp: 294.53,
        feels_like: 293.85,
        temp_min: 294.53,
        temp_max: 294.53,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1015,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 71,
      },
      wind: {
        speed: 6.44,
        deg: 302,
        gust: 7.67,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-21 21:00:00",
    },
    {
      dt: 1724284800,
      main: {
        temp: 293.25,
        feels_like: 292.7,
        temp_min: 293.25,
        temp_max: 293.25,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1017,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03n",
        },
      ],
      clouds: {
        all: 49,
      },
      wind: {
        speed: 6.58,
        deg: 301,
        gust: 8.68,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-22 00:00:00",
    },
    {
      dt: 1724295600,
      main: {
        temp: 290.8,
        feels_like: 290.29,
        temp_min: 290.8,
        temp_max: 290.8,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 1019,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 4,
      },
      wind: {
        speed: 6.11,
        deg: 306,
        gust: 8.25,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-22 03:00:00",
    },
    {
      dt: 1724306400,
      main: {
        temp: 289.98,
        feels_like: 289.34,
        temp_min: 289.98,
        temp_max: 289.98,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1019,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 4.39,
        deg: 290,
        gust: 6.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-22 06:00:00",
    },
    {
      dt: 1724317200,
      main: {
        temp: 289.73,
        feels_like: 289.14,
        temp_min: 289.73,
        temp_max: 289.73,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1019,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 4.07,
        deg: 279,
        gust: 5.93,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-22 09:00:00",
    },
    {
      dt: 1724328000,
      main: {
        temp: 290.27,
        feels_like: 289.66,
        temp_min: 290.27,
        temp_max: 290.27,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1021,
        humidity: 62,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 7,
      },
      wind: {
        speed: 4.11,
        deg: 282,
        gust: 5.38,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-22 12:00:00",
    },
    {
      dt: 1724338800,
      main: {
        temp: 294.37,
        feels_like: 293.75,
        temp_min: 294.37,
        temp_max: 294.37,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1022,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 3,
      },
      wind: {
        speed: 3.87,
        deg: 275,
        gust: 5.23,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-22 15:00:00",
    },
    {
      dt: 1724349600,
      main: {
        temp: 296.87,
        feels_like: 296.32,
        temp_min: 296.87,
        temp_max: 296.87,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1020,
        humidity: 39,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 18,
      },
      wind: {
        speed: 4.27,
        deg: 253,
        gust: 5.33,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-22 18:00:00",
    },
    {
      dt: 1724360400,
      main: {
        temp: 297.61,
        feels_like: 297.1,
        temp_min: 297.61,
        temp_max: 297.61,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1020,
        humidity: 38,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 4.53,
        deg: 259,
        gust: 5.1,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-22 21:00:00",
    },
    {
      dt: 1724371200,
      main: {
        temp: 296.75,
        feels_like: 296.29,
        temp_min: 296.75,
        temp_max: 296.75,
        pressure: 1022,
        sea_level: 1022,
        grnd_level: 1021,
        humidity: 43,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.78,
        deg: 294,
        gust: 3.09,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-23 00:00:00",
    },
    {
      dt: 1724382000,
      main: {
        temp: 295.55,
        feels_like: 295.13,
        temp_min: 295.55,
        temp_max: 295.55,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 1022,
        humidity: 49,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 58,
      },
      wind: {
        speed: 2.25,
        deg: 253,
        gust: 2.7,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-23 03:00:00",
    },
    {
      dt: 1724392800,
      main: {
        temp: 294.5,
        feels_like: 294.07,
        temp_min: 294.5,
        temp_max: 294.5,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 56,
      },
      wind: {
        speed: 2.59,
        deg: 305,
        gust: 3.85,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-23 06:00:00",
    },
    {
      dt: 1724403600,
      main: {
        temp: 293.62,
        feels_like: 293.08,
        temp_min: 293.62,
        temp_max: 293.62,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01n",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.11,
        deg: 323,
        gust: 3.01,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-23 09:00:00",
    },
    {
      dt: 1724414400,
      main: {
        temp: 293.69,
        feels_like: 293.16,
        temp_min: 293.69,
        temp_max: 293.69,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1024,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.76,
        deg: 297,
        gust: 1.82,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-23 12:00:00",
    },
    {
      dt: 1724425200,
      main: {
        temp: 296.42,
        feels_like: 295.95,
        temp_min: 296.42,
        temp_max: 296.42,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1025,
        humidity: 44,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 1.59,
        deg: 265,
        gust: 2.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-23 15:00:00",
    },
    {
      dt: 1724436000,
      main: {
        temp: 298.72,
        feels_like: 298.38,
        temp_min: 298.72,
        temp_max: 298.72,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1024,
        humidity: 40,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: "Clear",
          description: "clear sky",
          icon: "01d",
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.27,
        deg: 183,
        gust: 3.11,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-23 18:00:00",
    },
    {
      dt: 1724446800,
      main: {
        temp: 298.9,
        feels_like: 298.73,
        temp_min: 298.9,
        temp_max: 298.9,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 46,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02d",
        },
      ],
      clouds: {
        all: 11,
      },
      wind: {
        speed: 4.83,
        deg: 173,
        gust: 4.46,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2024-08-23 21:00:00",
    },
    {
      dt: 1724457600,
      main: {
        temp: 298.39,
        feels_like: 298.35,
        temp_min: 298.39,
        temp_max: 298.39,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1023,
        humidity: 53,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: "Clouds",
          description: "few clouds",
          icon: "02n",
        },
      ],
      clouds: {
        all: 15,
      },
      wind: {
        speed: 3.86,
        deg: 186,
        gust: 5.34,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2024-08-24 00:00:00",
    },
  ],
  city: {
    id: 0,
    name: "Brooklyn",
    coord: {
      lat: 40.6251,
      lon: -74.0303,
    },
    country: "US",
    population: 0,
    timezone: -14400,
    sunrise: 1723975808,
    sunset: 1724024994,
  },
};

export default mockData;
