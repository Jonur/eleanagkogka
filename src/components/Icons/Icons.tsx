import React from 'react';

type StarProps = { className?: string };

export const Star: React.FC<StarProps> = ({ className = '' }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10 0L13.1113 6.88873L20 10L13.1113 13.1113L10 20L6.88873 13.1113L0 10L6.88873 6.88873L10 0Z"
      fill="currentColor"
    />
  </svg>
);

export const Menu: React.FC<StarProps> = ({ className = '' }) => (
  <svg className={className} width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 1H24" stroke="#394F71" strokeWidth="2" />
    <path d="M0 9H24" stroke="#394F71" strokeWidth="2" />
    <path d="M0 17H18" stroke="#394F71" strokeWidth="2" />
  </svg>
);

export const Close: React.FC<StarProps> = ({ className = '' }) => (
  <svg className={className} width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.0293 1.51477L17.9999 18.4853" stroke="#FBFBFB" strokeWidth="2" />
    <path d="M1.0293 18.4854L17.9999 1.51479" stroke="#FBFBFB" strokeWidth="2" />
  </svg>
);

export const LinkedInLogo: React.FC<StarProps> = ({ className = '' }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_222_16291)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.32499 3.03601C3.59344 3.03601 3 3.61139 3 4.32024V19.6802C3 20.3891 3.59351 20.964 4.32499 20.964H19.603C20.3348 20.964 20.928 20.3891 20.928 19.68V4.32024C20.928 3.61139 20.3348 3.03601 19.603 3.03601H4.32499ZM8.44819 9.96807V18.0393H5.76543V9.96807H8.44819ZM8.62502 7.47194C8.62502 8.24649 8.04271 8.86626 7.10737 8.86626L7.10716 8.86619H7.08979C6.1894 8.86619 5.6073 8.24642 5.6073 7.47187C5.6073 6.67975 6.20698 6.07727 7.12516 6.07727C8.04271 6.07727 8.60751 6.67975 8.62502 7.47194ZM12.6157 18.0393H9.93313L9.93306 18.0396C9.93306 18.0396 9.96829 10.7255 9.93327 9.96835H12.6159V11.1108C12.9725 10.5609 13.6107 9.77884 15.0337 9.77884C16.7987 9.77884 18.122 10.9325 18.122 13.4115V18.0393H15.4395V13.7219C15.4395 12.6367 15.0511 11.8967 14.0806 11.8967C13.3393 11.8967 12.8979 12.3958 12.7041 12.8779C12.6332 13.05 12.6157 13.2915 12.6157 13.5324V18.0393Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_222_16291">
        <rect width="17.928" height="18" fill="white" transform="translate(3 3)" />
      </clipPath>
    </defs>
  </svg>
);

export const BehanceLogo: React.FC<StarProps> = ({ className = '' }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M10.0716 11.6353C10.0716 11.6353 11.9643 11.4955 11.9643 9.28678C11.9643 7.07791 10.4158 5.99994 8.45436 5.99994H2V18.3434H8.45436C8.45436 18.3434 12.3945 18.4673 12.3945 14.7002C12.3945 14.7002 12.5663 11.6353 10.0716 11.6353ZM7.98978 8.19385H8.45436C8.45436 8.19385 9.33169 8.19385 9.33169 9.47814C9.33169 10.7623 8.81573 10.9484 8.23048 10.9484H4.84387V8.19385H7.98978ZM8.27197 16.1496H4.84387V12.8509H8.45436C8.45436 12.8509 9.76199 12.8339 9.76199 14.5461C9.76199 15.9899 8.78532 16.1387 8.27197 16.1496ZM17.6494 9.14048C12.8794 9.14048 12.8836 13.8832 12.8836 13.8832C12.8836 13.8832 12.5563 18.6016 17.6494 18.6016C17.6494 18.6016 21.8935 18.8429 21.8935 15.3193H19.7108C19.7108 15.3193 19.7836 16.6462 17.7222 16.6462C17.7222 16.6462 15.5391 16.7918 15.5391 14.4987H21.9663C21.9663 14.4987 22.6696 9.14048 17.6494 9.14048ZM15.5151 12.8509C15.5151 12.8509 15.7817 10.9484 17.6979 10.9484C19.6137 10.9484 19.5897 12.8509 19.5897 12.8509H15.5151ZM20.0981 8.24713H14.9808V6.72713H20.0981V8.24713Z"
      fill="currentColor"
    />
  </svg>
);

export const DribbleLogo: React.FC<StarProps> = ({ className = '' }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M3 12C3 10.368 3.40201 8.86201 4.206 7.482C5.01001 6.10199 6.10201 5.01001 7.482 4.206C8.86201 3.40199 10.368 3 12 3C13.632 3 15.138 3.40199 16.518 4.206C17.898 5.01001 18.99 6.10199 19.794 7.482C20.598 8.86201 21 10.368 21 12C21 13.632 20.598 15.138 19.794 16.518C18.99 17.898 17.898 18.99 16.518 19.794C15.138 20.598 13.632 21 12 21C10.368 21 8.86201 20.598 7.482 19.794C6.10201 18.99 5.01001 17.898 4.206 16.518C3.40201 15.138 3 13.632 3 12ZM4.494 12C4.494 13.872 5.124 15.522 6.384 16.95C6.96 15.822 7.87201 14.748 9.12 13.728C10.368 12.708 11.586 12.066 12.774 11.802C12.594 11.382 12.42 11.004 12.252 10.668C10.188 11.328 7.95601 11.658 5.556 11.658C5.088 11.658 4.74001 11.652 4.512 11.64C4.512 11.688 4.50901 11.748 4.503 11.82C4.49701 11.892 4.494 11.952 4.494 12ZM4.728 10.146C4.99201 10.17 5.38201 10.182 5.898 10.182C7.90201 10.182 9.804 9.912 11.604 9.372C10.692 7.752 9.69001 6.402 8.598 5.322C7.65001 5.80201 6.83701 6.46801 6.159 7.32C5.48101 8.17199 5.00401 9.11401 4.728 10.146ZM7.41 17.922C8.76601 18.978 10.296 19.506 12 19.506C12.888 19.506 13.77 19.338 14.646 19.002C14.406 16.95 13.938 14.964 13.242 13.044C12.138 13.284 11.025 13.89 9.903 14.862C8.78101 15.834 7.95 16.854 7.41 17.922ZM10.164 4.746C11.22 5.83801 12.198 7.19999 13.098 8.832C14.73 8.148 15.96 7.27801 16.788 6.222C15.396 5.07 13.8 4.494 12 4.494C11.388 4.494 10.776 4.57801 10.164 4.746ZM13.746 10.11C13.926 10.494 14.13 10.98 14.358 11.568C15.246 11.484 16.212 11.442 17.256 11.442C18 11.442 18.738 11.46 19.47 11.496C19.374 9.86399 18.786 8.41201 17.706 7.14C16.926 8.30401 15.606 9.29401 13.746 10.11ZM14.808 12.828C15.42 14.604 15.834 16.428 16.05 18.3C16.998 17.688 17.772 16.902 18.372 15.942C18.972 14.982 19.332 13.944 19.452 12.828C18.576 12.768 17.778 12.738 17.058 12.738C16.398 12.738 15.648 12.768 14.808 12.828Z"
      fill="currentColor"
    />
  </svg>
);

export const MediumLogo: React.FC<StarProps> = ({ className = '' }) => (
  <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.64062 6C10.756 6 13.2812 8.51858 13.2812 11.6251C13.2812 14.7317 10.7558 17.25 7.64062 17.25C4.52562 17.25 2 14.7317 2 11.6251C2 8.51866 4.52539 6 7.64062 6ZM16.6484 6.32948C18.2061 6.32948 19.4688 8.70019 19.4688 11.6251C19.4688 14.5493 18.2063 16.9207 16.6488 16.9207C15.0912 16.9207 13.8284 14.5493 13.8284 11.6251C13.8284 8.70096 15.0908 6.32948 16.6484 6.32948ZM21.008 6.8811C21.5558 6.8811 22 9.00505 22 11.6252C22 14.2444 21.5559 16.3692 21.008 16.3692C20.4602 16.3692 20.0163 14.245 20.0163 11.6252C20.0163 9.00521 20.4604 6.8811 21.008 6.8811Z"
      fill="currentColor"
    />
  </svg>
);

export const Arrow: React.FC<StarProps> = ({ className = '' }) => (
  <svg className={className} width="15" height="12" viewBox="0 0 15 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3133 7.00025H0V5.00025H10.3138L7.07092 1.75735L8.48513 0.34314L13.4349 5.29289L14.142 5.99999L13.4349 6.7071L8.48513 11.6568L7.07092 10.2426L10.3133 7.00025Z"
      fill="currentColor"
    />
  </svg>
);
export const FatArrow: React.FC<StarProps> = ({ className = '' }) => (
  <svg className={className} width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.32998 20L17.6505 10L0.32998 1.78814e-07L0.32998 8.11596L5.59326 10L0.329979 11.8841L0.32998 20Z"
      fill="url(#paint0_linear_222_16221)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_222_16221"
        x1="10"
        y1="-3"
        x2="-5.22881"
        y2="4.27531"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DE7E90" />
        <stop offset="0.94644" stopColor="#5992AA" />
      </linearGradient>
    </defs>
  </svg>
);
