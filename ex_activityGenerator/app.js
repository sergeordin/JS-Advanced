'use strict';

const wrapper = document.querySelector('.wrapper');

async function getActivity() {
    const res = await fetch('https://www.boredapi.com/api/activity');
    return res.json();
}

async function generate() {
    try {
        wrapper.innerHTML = '';
        const data = await Promise.all([
            getActivity(),
            getActivity(),
            getActivity(),
        ]);
        for (const el of data) {
            const element = document.createElement('div');
            element.innerHTML = `${el.activity}`;
            wrapper.appendChild(element);
        }
    } catch (e) {
        console.error(e);
    }
}
