import React, { useEffect, useRef } from "react"
import Matter from "matter-js"

const physics: React.FC<{ 
    gravX?: number; 
    gravY?: number; 
    sleeping?: boolean; 
    debug?: boolean; 
    children?: React.ReactNode; 
    wallOptions?: { top: boolean; bottom: boolean; left: boolean; right: boolean; } 
}> = ({
    gravX = 0,
    gravY = 1,
    sleeping = false,
    debug = false,
    children,
    wallOptions = { top: true, bottom: true, left: true, right: true },
}) => {
    const containerRef = useRef<HTMLDivElement>(null)
    let engine = Matter.Engine.create({
        enableSleeping: sleeping,
        gravity: { x: gravX, y: gravY },
    })

    useEffect(() => {
        if (containerRef.current) {
            // Khởi tạo các bức tường
            makeWalls(containerRef.current.getBoundingClientRect(), engine.world, wallOptions)

            // Thiết lập debug nếu cần
            if (debug) {
                const render = Matter.Render.create({
                    element: containerRef.current,
                    engine: engine,
                    options: {
                        width: containerRef.current.clientWidth,
                        height: containerRef.current.clientHeight,
                        showAngleIndicator: true,
                        showVelocity: true,
                    },
                })
                Matter.Render.run(render)
            }

            // Cập nhật vị trí của các đối tượng
            const update = () => {
                Matter.Engine.update(engine)
                requestAnimationFrame(update)
            }
            requestAnimationFrame(update)
        }
    }, [engine, wallOptions, debug, gravX, gravY])

    return (
        <div
            ref={containerRef}
            style={{ height: "100%", width: "100%", overflow: "hidden" }}
            draggable="false"
        >
            {React.Children.map(children, (child) => (
                <div style={{ position: "absolute", visibility: "hidden" }} draggable="false">
                    {child}
                </div>
            ))}
        </div>
    )
}

export default physics
// Tạo Hàm makeWalls
const makeWalls = (bounding: DOMRect, world: Matter.World, options: any) => {
    const walls = []
    if (options.top) {
        walls.push(Matter.Bodies.rectangle(bounding.width / 2, 0, bounding.width, 50, { isStatic: true }))
    }
    if (options.bottom) {
        walls.push(Matter.Bodies.rectangle(bounding.width / 2, bounding.height, bounding.width, 50, { isStatic: true }))
    }
    if (options.left) {
        walls.push(Matter.Bodies.rectangle(0, bounding.height / 2, 50, bounding.height, { isStatic: true }))
    }
    if (options.right) {
        walls.push(Matter.Bodies.rectangle(bounding.width, bounding.height / 2, 50, bounding.height, { isStatic: true }))
    }
    Matter.World.add(world, walls)
}
