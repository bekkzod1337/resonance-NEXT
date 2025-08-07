'use client';
import React from 'react';
import Image from 'next/image';
import Footer from '../components/common/Footer';
import Button from '../components/ui/Button';
import Header from '../components/Header';

interface ProductFeature {
  icon: string;
  title: string;
  description: string;
  isAvailable: boolean;
}

interface ProductData {
  name: string;
  image: string;
  price: string;
  features: ProductFeature[];
}

const ComparePage: React.FC = () => {
  const auraProFeatures: ProductFeature[] = [
    {
      icon: "/icons/cpu.png",
      title: "R1 Chip",
      description: "R1 Chip",
      isAvailable: true
    },
    {
      icon: "/icons/speakersimpleslash.png",
      title: "Active Noise Cancellation",
      description: "2x more Active Noise Cancellation",
      isAvailable: true
    },
    {
      icon: "/icons/usersound.png",
      title: "Spatial Audio",
      description: "Personalized Spatial Audio",
      isAvailable: true
    },
    {
      icon: "/icons/equalizer.png",
      title: "Audio Quality",
      description: "Lossless Audio",
      isAvailable: true
    },
    {
      icon: "/icons/minus.png",
      title: "Hearing Protection",
      description: "None",
      isAvailable: false
    },
    {
      icon: "/icons/minus.png",
      title: "Touch Controls",
      description: "None",
      isAvailable: false
    },
    {
      icon: "/icons/img_batterycharging.png",
      title: "Battery Life",
      description: "Up to 17 hours of listening",
      isAvailable: true
    },
    {
      icon: "/icons/minus.png",
      title: "Water Resistance",
      description: "None",
      isAvailable: false
    },
    {
      icon: "/icons/microphone.png",
      title: "Microphones",
      description: "5 microphones total",
      isAvailable: true
    }
  ];

  const flowIIFeatures: ProductFeature[] = [
    {
      icon: "/icons/cpu.png",
      title: "R2 Chip",
      description: "R2 Chip",
      isAvailable: true
    },
    {
      icon: "/icons/speakersimpleslash.png",
      title: "Active Noise Cancellation",
      description: "Active Noise Cancellation",
      isAvailable: true
    },
    {
      icon: "/icons/usersound.png",
      title: "Spatial Audio",
      description: "Personalized Spatial Audio",
      isAvailable: true
    },
    {
      icon: "/icons/minus.png",
      title: "Audio Quality",
      description: "None",
      isAvailable: false
    },
    {
      icon: "/icons/ear.png",
      title: "Hearing Protection",
      description: "Hearing Test and Hearing Protection",
      isAvailable: true
    },
    {
      icon: "/icons/handtap.png",
      title: "Touch Controls",
      description: "Touch sensor",
      isAvailable: true
    },
    {
      icon: "/icons/batterycharging.png",
      title: "Battery Life",
      description: "Up to 6 hours of listening",
      isAvailable: true
    },
    {
      icon: "/icons/drop.png",
      title: "Water Resistance",
      description: "Water resistant",
      isAvailable: true
    },
    {
      icon: "/icons/microphone.png",
      title: "Microphones",
      description: "Dual beamforming microphones",
      isAvailable: true
    }
  ];

  const auraProData: ProductData = {
    name: "Aura Pro II",
    image: "/Headphones/Color=green.png",
    price: "Starting at $320",
    features: auraProFeatures
  };

  const flowIIData: ProductData = {
    name: "Flow II",
    image: "/images/img_headphones_green_300x300.png",
    price: "Starting at $160",
    features: flowIIFeatures
  };

  return (
    <div className="flex flex-col max-w-[1280px] justify-center mr-auto ml-auto items-center w-full bg-[#f5f5f5]">
      {/* Header */}
      <Header />
      {/* Main Content */}
      <main className="w-full">
        <div className="w-full max-w-[1040px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-[21px] sm:gap-[31px] md:gap-[42px] justify-center items-center w-full pt-[40px] pr-[28px] pb-[40px] pl-[28px] sm:pt-[60px] sm:pr-[42px] sm:pb-[60px] sm:pl-[42px] md:pt-[80px] md:pr-[56px] md:pb-[80px] md:pl-[56px]">
            {/* Hero Section */}
            <div className="flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-center w-auto pr-[9px] pl-[9px] sm:pr-[13px] sm:pl-[13px] md:pr-[18px] md:pl-[18px]">
              <h1 className="text-[28px] sm:text-[42px] md:text-[56px] font-poppins font-semibold leading-[42px] sm:leading-[63px] md:leading-[84px] text-center capitalize text-[#51483e]">
                Compare Resonance models
              </h1>
              <p className="text-[16px] sm:text-[20px] md:text-[24px] font-poppins font-normal leading-[24px] sm:leading-[30px] md:leading-[36px] text-center text-[#8b8681]">
                Get help choosing. Chat with a Specialist.
              </p>
            </div>
            {/* Product Comparison */}
            <div className="w-full pr-[21px] pl-[21px] sm:pr-[31px] sm:pl-[31px] md:pr-[42px] md:pl-[42px]">
              <div className="flex flex-col lg:flex-row gap-[12px] sm:gap-[18px] md:gap-[24px] w-full">
                {/* Aura Pro II */}
                <div className="flex flex-col gap-[21px] sm:gap-[31px] md:gap-[42px] justify-start items-center w-full lg:w-[486px]">
                  {/* Product Card */}
                  <div className="flex flex-col border-2 border-gray-500 gap-[21px] sm:gap-[31px] md:gap-[42px] justify-start items-center w-full rounded-[12px] sm:rounded-[18px] md:rounded-[24px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] sm:pt-[18px] sm:pr-[18px] sm:pb-[18px] sm:pl-[18px] md:pt-[24px] md:pr-[24px] md:pb-[24px] md:pl-[24px] bg-[#f5f5f5]">
                    <div className="flex flex-col gap-[21px] sm:gap-[31px] md:gap-[42px] justify-start items-center w-full">
                      <div className="flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-center w-full pr-[22px] pl-[22px] sm:pr-[33px] sm:pl-[33px] md:pr-[44px] md:pl-[44px]">
                        <h2 className="text-[21px] sm:text-[31px] md:text-[42px] font-poppins font-semibold leading-[31px] sm:leading-[47px] md:leading-[63px] text-center capitalize text-[#51483e]">
                          Aura Pro II
                        </h2>
                        <Image
                          src="/Headphones/Color=green.png"
                          alt="Aura Pro II Headphones"
                          width={300}
                          height={300}
                          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-center w-full pr-[28px] pl-[28px] sm:pr-[42px] sm:pl-[42px] md:pr-[56px] md:pl-[56px]">
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-normal leading-[21px] sm:leading-[24px] md:leading-[27px] text-center text-[#8b8681]">
                          Starting at $320
                        </p>
                        <Button
                          variant="primary"
                          className="text-[14px] sm:text-[15px] md:text-[16px] font-poppins font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-[#ffffff] rounded-[16px] sm:rounded-[19px] md:rounded-[22px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] sm:pt-[9px] sm:pr-[28px] sm:pb-[9px] sm:pl-[28px] md:pt-[10px] md:pr-[32px] md:pb-[10px] md:pl-[32px] bg-[linear-gradient(180deg,#52483e_0%,_#8b8681_100%)] hover:opacity-90 transition-opacity duration-200"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* Features List */}
                  <div className="flex flex-col gap-[16px] sm:gap-[24px] md:gap-[32px] justify-start items-center w-full rounded-[12px] sm:rounded-[18px] md:rounded-[24px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] sm:pt-[18px] sm:pr-[18px] sm:pb-[18px] sm:pl-[18px] md:pt-[24px] md:pr-[24px] md:pb-[24px] md:pl-[24px] bg-[#ffffff] mb-[18px] sm:mb-[27px] md:mb-[36px]">
                    {auraProFeatures.map((feature, index) => (
                      <div key={index} className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[12px] justify-start items-center w-full pr-[28px] pl-[28px] sm:pr-[42px] sm:pl-[42px] md:pr-[56px] md:pl-[56px]">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={32}
                          height={32}
                          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]"
                        />
                        <p className={`text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-normal leading-[21px] sm:leading-[24px] md:leading-[27px] text-center ${feature.isAvailable ? 'text-[#666666]' : 'text-[#8b8681]'}`}>
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Flow II */}
                <div className="flex flex-col gap-[21px] sm:gap-[31px] md:gap-[42px] justify-start items-center w-full lg:w-[486px]">
                  {/* Product Card */}
                  <div className="flex flex-col border-2 border-gray-500 gap-[21px] sm:gap-[31px] md:gap-[42px] justify-start items-center w-full rounded-[12px] sm:rounded-[18px] md:rounded-[24px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] sm:pt-[18px] sm:pr-[18px] sm:pb-[18px] sm:pl-[18px] md:pt-[24px] md:pr-[24px] md:pb-[24px] md:pl-[24px] bg-[#f5f5f5]">
                    <div className="flex flex-col gap-[21px] sm:gap-[31px] md:gap-[42px] justify-start items-center w-full">
                      <div className="flex flex-col gap-[4px] sm:gap-[6px] md:gap-[8px] justify-start items-center w-full pr-[22px] pl-[22px] sm:pr-[33px] sm:pl-[33px] md:pr-[44px] md:pl-[44px]">
                        <h2 className="text-[21px] sm:text-[31px] md:text-[42px] font-poppins font-semibold leading-[31px] sm:leading-[47px] md:leading-[63px] text-center capitalize text-[#51483e]">
                          Flow II
                        </h2>
                        <Image
                          src="/images/1.png"
                          alt="Flow II Earbuds"
                          width={300}
                          height={300}
                          className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] object-contain"
                        />
                      </div>
                      <div className="flex flex-col gap-[8px] sm:gap-[12px] md:gap-[16px] justify-start items-center w-full pr-[28px] pl-[28px] sm:pr-[42px] sm:pl-[42px] md:pr-[56px] md:pl-[56px]">
                        <p className="text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-normal leading-[21px] sm:leading-[24px] md:leading-[27px] text-center text-[#8b8681]">
                          Starting at $160
                        </p>
                        <Button
                          variant="primary"
                          className="text-[14px] sm:text-[15px] md:text-[16px] font-poppins font-normal leading-[20px] sm:leading-[22px] md:leading-[24px] text-center text-[#ffffff] rounded-[16px] sm:rounded-[19px] md:rounded-[22px] pt-[8px] pr-[24px] pb-[8px] pl-[24px] sm:pt-[9px] sm:pr-[28px] sm:pb-[9px] sm:pl-[28px] md:pt-[10px] md:pr-[32px] md:pb-[10px] md:pl-[32px] bg-[linear-gradient(180deg,#52483e_0%,_#8b8681_100%)] hover:opacity-90 transition-opacity duration-200"
                        >
                          Buy Now
                        </Button>
                      </div>
                    </div>
                  </div>
                  {/* Features List */}
                  <div className="flex flex-col gap-[16px] max-h-[1350px] sm:gap-[24px] md:gap-[32px] justify-start items-center w-full rounded-[12px] sm:rounded-[18px] md:rounded-[24px] pt-[12px] pr-[12px] pb-[12px] pl-[12px] sm:pt-[18px] sm:pr-[18px] sm:pb-[18px] sm:pl-[18px] md:pt-[24px] md:pr-[24px] md:pb-[24px] md:pl-[24px] bg-[#ffffff] mb-[18px] sm:mb-[27px] md:mb-[36px]">
                    {flowIIFeatures.map((feature, index) => (
                      <div key={index} className="flex flex-col gap-[6px] sm:gap-[9px] md:gap-[12px] justify-start items-center w-full pr-[28px] pl-[28px] sm:pr-[42px] sm:pl-[42px] md:pr-[56px] md:pl-[56px]">
                        <Image
                          src={feature.icon}
                          alt={feature.title}
                          width={32}
                          height={32}
                          className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] md:w-[32px] md:h-[32px]"
                        />
                        <p className={`text-[14px] sm:text-[16px] md:text-[18px] font-poppins font-normal leading-[21px] sm:leading-[24px] md:leading-[27px] text-center ${feature.isAvailable ? 'text-[#666666]' : 'text-[#8b8681]'}`}>
                          {feature.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ComparePage;