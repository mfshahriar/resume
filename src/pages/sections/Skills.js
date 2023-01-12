import React from "react";
import pythonImg from "../../assets/logos/python.png";
import javascriptImg from "../../assets/logos/javasript.png";
import javaImg from "../../assets/logos/java.png";
import cSharpImg from "../../assets/logos/cSharp.png";
import cImg from "../../assets/logos/c.png";
import cppImg from "../../assets/logos/cpp.png";
import dartImg from "../../assets/logos/dart.png";
import reactImg from "../../assets/logos/reactjs.png";
import nextjsImg from "../../assets/logos/nextjs.png";
import flutterImg from "../../assets/logos/flutter.png";
import djangoImg from "../../assets/logos/django.png";
import tensorflowImg from "../../assets/logos/tensorflow.png";
import numpyImg from "../../assets/logos/numpy.png";
import pandasImg from "../../assets/logos/pandas.png";
import sklearnImg from "../../assets/logos/Scikit_learn.png";
import matplotlib from "../../assets/logos/matplotlib.png";
import opencvImg from "../../assets/logos/opencv.png";
import html5Img from "../../assets/logos/html5.png";
import css3Img from "../../assets/logos/css.png";
import bootstrapImg from "../../assets/logos/bootstrap.png";
import tailwindImg from "../../assets/logos/tailwindcss.png";

const Skills = () => {
  const logoImageCss = "object-contain h-20 m-4";
  return (
    <div className="h-auto w-full bg-white p-4 flex flex-col">
      <div className="max-w-5xl w-full self-center flex flex-col">
        <div className="mt-8 mb-8 flex flex-col">
          <span className="text-3xl font-mono font-bold text-blue-900">
            Skills
          </span>
          <div className="line-1 bg-blue-300" />
        </div>
        <div>
          <span className="mt-8 mb-6 text-2xl text-gray-700">
            Programming Language
          </span>
          <div className="flex flex-row flex-wrap my-8">
            <img src={pythonImg} alt="python" className={logoImageCss} />
            <img
              src={javascriptImg}
              alt="javaScript"
              className={logoImageCss}
            />
            <img src={javaImg} alt="java" className={logoImageCss} />
            <img src={cSharpImg} alt="C#" className={logoImageCss} />
            <img src={cImg} alt="C" className={logoImageCss} />
            <img src={cppImg} alt="C++" className={logoImageCss} />
          </div>
        </div>
        <div>
          <span className="mt-8 mb-6 text-2xl text-gray-700">
            Web technologies
          </span>
          <div className="flex flex-row flex-wrap my-8">
            <img src={html5Img} alt="Html5" className={logoImageCss} />
            <img src={css3Img} alt="CSS3" className={logoImageCss} />
            <img src={bootstrapImg} alt="Bootstrap" className={logoImageCss} />
          </div>
        </div>
        <div>
          <span className="mt-8 mb-6 text-2xl text-gray-700">
            Machine Learning Tools
          </span>
          <div className="flex flex-row flex-wrap my-8">
            <img
              src={tensorflowImg}
              alt="Tensorflow"
              className={logoImageCss}
            />
            <img src={numpyImg} alt="Numpy" className={logoImageCss} />
            <img src={pandasImg} alt="Pandas" className={logoImageCss} />
            <img src={matplotlib} alt="Matplotlib" className={logoImageCss} />
            <img src={sklearnImg} alt="Sklearn" className={logoImageCss} />
            <img src={opencvImg} alt="OpenCV" className={logoImageCss} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
