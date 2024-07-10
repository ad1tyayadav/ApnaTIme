import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="about-container mt-4 mb-2 bg-gray-100 px-4 py-16 mx-auto max-w-screen-lg">
            <p className="text-lg mb-4 text-center">
                We're excited to present Apnatime to you, a platform designed for busy individuals like you and a big thanks to <b>ICP</b> we appreciate your interest in exploring how Apnatime can streamline your appointment scheduling and empower you to reclaim valuable time.
            </p>
            <h2 className="text-3xl font-bold mb-8 text-center">About Apnatime</h2>
            <div className="grid gap-8 md:grid-cols-2">
                <div className="about-text">
                    <p className="text-lg mb-4">Apnatime empowers busy people to reclaim their time. We're your one-stop platform for discovering and booking appointments with local businesses, simplifying your life and maximizing your convenience.</p>
                    <p>Imagine finding the perfect salon, restaurant, gym, or any service provider you need, right from your device. With Apnatime, you can:</p>
                    <ul className="list-disc ml-4 mt-4">
                        <li>Explore a vast directory of businesses across diverse categories.</li>
                        <li>Make informed decisions with insightful reviews and ratings from other users.</li>
                        <li>Schedule appointments online in mere minutes, eliminating phone calls and back-and-forth.</li>
                        <li>Manage your appointments effortlessly through your personalized Apnatime account, always staying on top of your schedule.</li>
                    </ul>
                </div>
                <img
                    className="about-image rounded-lg shadow-md mx-auto md:mx-0"
                    src="https://plus.unsplash.com/premium_photo-1678917827802-721b5f5b4bf0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with your Apnatime logo or image
                    alt="Apnatime logo or relevant image"
                />
            </div>
            <div className="cta-container mt-8 flex justify-center md:justify-end">
                <Link to='/shops-listing' className="btn btn-primary px-4 py-2 rounded-md text-white font-medium" >Explore Apnatime Now</Link>
            </div>
        </div>
    );
};

export default About;