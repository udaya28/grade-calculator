import React from 'react'

function Main() {
    return (
        <main className="flex flex-col md:flex-row items-center justify-evenly">
            <section className="flex basis-full md:basis-7/12 items-start justify-start flex-col">
                <h1 className="text-primary font-bold text-lg md:text-2xl">GPA Calculator</h1>
                {/* eslint-disable-next-line max-len */}
                <p className="text-justify">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et
                    magnis dis parturient montes, nascetur ridiculuss. Donec quam felis, ultricies nec, pellentesque eu,
                    pretium quis, sem. Nulla consequat massa quis enim.
                </p>
                <h1 className="text-primary font-bold text-lg md:text-2xl">Calculate Your SGPA</h1>
            </section>
            <aside className="flex basis-full md:basis-5/12 items-center justify-center">
                <h1>Aside</h1>
            </aside>
        </main>
    )
}

export default Main
