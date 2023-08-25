"use client";

export default async function Hello() {
    await new Promise((resolve) => {
        setTimeout(resolve, 1000);
    });
    return <div>Hello customer and welcome !</div>;
}
