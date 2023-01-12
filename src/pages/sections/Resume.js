import InfoBody from "../../components/InfoBody";
import React from "react";
const Resume = () => {
  return (
    <div className="h-auto w-full bg-white p-4 flex flex-col">
      <div className="flex flex-col w-full max-w-5xl self-center">
        <div className="flex flex-col">
          <span className="text-3xl font-mono font-bold text-blue-900">
            Resume
          </span>
          <div className="line-1 bg-blue-300" />
        </div>
        <div className="w-full h-auto flex flex-col lg:flex-row">
          <div className="flex flex-col w-full lg:w-1/2 h-auto py-4">
            <span className="text-2xl font-semibold text-slate-900">
              Education
            </span>
            <InfoBody>
              <div className="flex flex-col pb-4">
                <span className="text-xl font-bold text-stone-900">
                  BACHELOR OF SCIENCE IN COMPUTER SCIENCE & ENGINEERING
                </span>
                <div className="my-4">
                  <span className="p-2 bg-slate-300 font-semibold text-gray-700">
                    2018 - 2021
                  </span>
                </div>
                <span className="font-light italic my-2">
                  American International University-Bangladesh
                </span>
                <span>CGPA: 3.98 (Out of 4.00)</span>
                <span className="mt-2 font-light">Electives</span>
                <ul className="list-disc font-light">
                  <div className="ml-8">
                    <li>Computer Vision And Pattern Recognition</li>
                    <li>Data Warehousing and Data Mining</li>
                    <li>Human Computer Interaction</li>
                  </div>
                </ul>
              </div>
            </InfoBody>
          </div>
          <div className="flex flex-col w-full lg:w-1/2 h-auto py-4">
            <span className="text-2xl font-semibold">Research Work</span>
            <InfoBody>
              <div className="flex flex-col pb-4">
                <span className="text-xl font-bold text-stone-900">
                Early Detection of Alzheimer's Disease Using Deep Learning
                </span>
                <div className="my-4">
                  <span className="p-2 bg-slate-300 font-semibold text-gray-700">
                    MAY 2021
                  </span>
                </div>
                <span className="font-light italic my-2">
                  Undergraduate Thesis
                </span>
                <ul className="list-disc font-light">
                  <div className="ml-4">
                    <li>Find Compactable MRI Dataset</li>
                    <li>Process Data</li>
                    <li>Train model using CNN, DNN, SVM, RF, KNN</li>
                    <li>
                      Performance comparison between multiple trained models
                    </li>
                    <li>Detect multiple stages of Alzheimer</li>
                  </div>
                </ul>
              </div>
            </InfoBody>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
