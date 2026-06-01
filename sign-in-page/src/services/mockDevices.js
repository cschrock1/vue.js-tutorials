let currentTemps = [72, 145, 62]

export function getDevices() {
    currentTemps = currentTemps.map(temp => {
        const numTemp = Number(temp)
        const change = (Math.random() - 0.5) * 2 // small change ±1
        return (numTemp + change).toFixed(1)
    })

    return [
        {
            id: 1,
            name: "HVAC Unit 1",
            status: "online",
            temp: currentTemps[0]
        },
        {
            id: 2,
            name: "Boiler",
            status: "online",
            temp: currentTemps[1]
        },
        {
            id: 3,
            name: "Cooling Tower",
            status: "online",
            temp: currentTemps[2]
        }
    ]
}