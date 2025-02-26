"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import "animate.css";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const ContactUs: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [apiKey] = useState<string>("YOUR_GOOGLE_MAPS_API_KEY");

   useEffect(() => {
       if (!canvasRef.current) return;
   
       const scene = new THREE.Scene();
       const camera = new THREE.PerspectiveCamera(
         75,
         window.innerWidth / window.innerHeight,
         0.1,
         1000
       );
       const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current });
       renderer.setSize(window.innerWidth, window.innerHeight);
   
       const geometry = new THREE.SphereGeometry(2, 20, 20);
       const material = new THREE.MeshStandardMaterial({
         color: 0x007bff,
         wireframe: true,
       });
       const sphere = new THREE.Mesh(geometry, material);
       scene.add(sphere);
   
       const light = new THREE.PointLight(0xffffff, 1, 100);
       light.position.set(2, 2, 5);
       scene.add(light);
   
       camera.position.z = 3;
   
       const animate = () => {
         requestAnimationFrame(animate);
         sphere.rotation.x += 0.005;
         sphere.rotation.y += 0.005;
         renderer.render(scene, camera);
       };
   
       animate();
     }, []);

  const mapContainerStyle = {
    width: "100%",
    height: "300px",
    borderRadius: "10px",
  };
  const center1 = { lat: 43.5, lng: -80.5 };
  const center2 = { lat: 51.5, lng: -0.12 };

  return (
    <>
      <canvas
        ref={canvasRef}
        className="fixed top-0  w-full h-full -z-10 "
      />
      <div className="relative py-20 px-6 text-white animate__animated animate__fadeIn min-h-screen flex flex-col items-center justify-center">
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl w-full">
          <div className="p-8 bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-2xl animate__animated animate__fadeInUp">
            <h2 className="text-2xl font-bold mb-4 text-blue-400">
              Contact Us
            </h2>
            <p className="text-gray-300">
              Letsachive Softwares is a privately owned IT Services business
              formed in 2011. We boast a strong team of IT engineers who excel
              in solving technical challenges and meeting business needs.
            </p>
            <div className="mt-6 space-y-6 text-lg">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-blue-400" /> 86, FF4, Gyand
                Khand 1, Indirapuram, Delhi NCR, India
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-400" /> ceo@letsachive.com
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-blue-400" /> 9911960868 / 9871927350
              </div>
            </div>
          </div>

          <div className="p-8 bg-white shadow-2xl rounded-2xl animate__animated animate__fadeInUp  w-full">
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="email"
                  placeholder="Email"
                  className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="p-3 border rounded w-full focus:ring-2 focus:ring-blue-400"
                />
              </div>
              <textarea
                placeholder="Enter Your Message"
                className="p-3 border rounded w-full h-24 focus:ring-2 focus:ring-blue-400"
              ></textarea>
              <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        <div className="w-full max-w-4xl mt-10 animate__animated animate__fadeInUp">
          <LoadScript googleMapsApiKey={apiKey}>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={center1}
              zoom={10}
            >
              <Marker position={center1} />
            </GoogleMap>
          </LoadScript>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
