import Title from '@/atoms/Title'
import HeadTitle from '@/molecules/About/HeadTitle'
import Info from '@/molecules/About/Info';
import React from 'react'

export default function About() {
    return (
        <section data-header="dark" className="px-4 py-96 text-center">
            <div className="bg-[#fffff7] rounded-md p-8">
                <HeadTitle />
                <Info />
            </div>
        </section>
    );
}
