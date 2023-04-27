import React, { useState } from 'react';
import './App.scss';
import PopUpMore from './Components/PopUpMore/PopUpMore';
import AddPopUp from './Components/AddPopUp/AddPopUp';

const linksHeader = [
  { title: 'Почта', link: 'https://mail.yandex.ru/?uid=960255489#inbox', icon: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='48' height='49' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23a)'%3E%3Cg clip-path='url(%23b)'%3E%3Cpath fill='%23FFCA38' d='M8 6.484h32v32H8z'/%3E%3Cpath d='M40 32.879v5.605H8v-5.97L22.224 20.66a2.431 2.431 0 013.113 0L40 32.879z' fill='%23FFDC7C'/%3E%3Cpath d='M40 13.336l-14.386 12.81a2.43 2.43 0 01-3.23.004L8 13.394v-6.91h32v6.852z' fill='url(%23c)'/%3E%3Cpath d='M40 13.336l-14.386 12.81a2.43 2.43 0 01-3.23.004L8 13.394v-6.91h32v6.852z' fill='url(%23d)' fill-opacity='.5'/%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='c' x1='47.583' y1='-13.695' x2='21.043' y2='21.836' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23FFDA3E'/%3E%3Cstop offset='1' stop-color='%23FC4714'/%3E%3C/linearGradient%3E%3ClinearGradient id='d' x1='46.235' y1='3.978' x2='24.054' y2='24.021' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23fff'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3CclipPath id='b'%3E%3Crect x='8' y='6.484' width='32' height='32' rx='10' fill='%23fff'/%3E%3C/clipPath%3E%3Cfilter id='a' x='0' y='.484' width='48' height='48' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 0.752941 0 0 0 0 0.227451 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow_660_44604'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow_660_44604' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")` },
  { title: 'Диск', link: 'https://disk.yandex.ru/client/disk', icon: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='48' height='48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d)'%3E%3Cg clip-path='url(%23clip0)'%3E%3Crect x='8' y='6' width='32' height='32' rx='10' fill='url(%23paint0_linear)'/%3E%3Cpath d='M30.113 11.66c-1.152-.019-1.994-.298-2.892-.596a39.071 39.071 0 00-.568-.186c-2.483-.783-5.557-.739-8.372.58a11.508 11.508 0 00-5.303 5.067c-.202.389-.397.795-.591 1.2-.525 1.095-1.048 2.186-1.729 2.942-3.25 3.33-4.727 6.78-3.674 8.965 2.269 4.713 34.983-10.61 32.714-15.324-.89-1.845-4.709-2.975-9.585-2.647z' fill='%23012B5B'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M27.055 29.482c9.072-4.249 14.485-11.722 13.013-14.778-1.471-3.056-10.313-2.51-19.384 1.74-9.07 4.25-14.935 10.59-13.464 13.647 1.472 3.056 10.765 3.64 19.835-.609z' fill='%231884FF'/%3E%3Cg filter='url(%23filter1_d)'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M26.832 28.116c4.29-2.01 7.204-4.81 6.508-6.257-.696-1.445-4.738-.988-9.029 1.022-4.29 2.01-7.204 4.81-6.508 6.256.696 1.445 4.738.989 9.029-1.021z' fill='%23fff'/%3E%3C/g%3E%3C/g%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='0' y='0' width='48' height='48' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeColorMatrix values='0 0 0 0 0.313726 0 0 0 0 0.443137 0 0 0 0 0.964706 0 0 0 0.35 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3Cfilter id='filter1_d' x='10.025' y='13.34' width='31.094' height='24.317' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset/%3E%3CfeGaussianBlur stdDeviation='3.838'/%3E%3CfeColorMatrix values='0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.6 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3ClinearGradient id='paint0_linear' x1='21.5' y1='17.5' x2='35' y2='37' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.021' stop-color='%230151AE'/%3E%3Cstop offset='1' stop-color='%23036DE6'/%3E%3C/linearGradient%3E%3CclipPath id='clip0'%3E%3Cpath d='M8 22c0-5.6 0-8.4 1.09-10.54a10 10 0 014.37-4.37C15.6 6 18.4 6 24 6c5.6 0 8.4 0 10.54 1.09a10 10 0 014.37 4.37C40 13.6 40 16.4 40 22c0 5.6 0 8.4-1.09 10.54a10.001 10.001 0 01-4.37 4.37C32.4 38 29.6 38 24 38c-5.6 0-8.4 0-10.54-1.09a10 10 0 01-4.37-4.37C8 30.4 8 27.6 8 22z' fill='%23fff'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")` },
  { title: 'Документы', link: 'https://docs.yandex.ru/docs?type=docx', icon: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='48' height='48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d)'%3E%3Cpath d='M8 22c0-5.6 0-8.4 1.1-10.5.9-1.9 2.5-3.5 4.4-4.4C15.6 6 18.4 6 24 6s8.4 0 10.5 1.1c1.9 1 3.4 2.5 4.4 4.4C40 13.6 40 16.4 40 22s0 8.4-1.1 10.5c-1 1.9-2.5 3.4-4.4 4.4C32.4 38 29.6 38 24 38 11.695 38 8 33.58 8 22z' fill='%23145BC7'/%3E%3C/g%3E%3Cpath d='M9.1 11.5C8 13.6 8 16.4 8 22c0 12.305 4.42 16 16 16 2.57 0 4.552 0 6.145-.106l.055-.094 6-21.6c.1-.5-.2-1.1-.7-1.2l-24-6.6a.28.28 0 01-.042.031A9.352 9.352 0 009.1 11.5z' fill='%23367AFE'/%3E%3Cpath d='M8.022 18C8 19.153 8 20.473 8 22c0 5.6 0 8.4 1.1 10.5 1 1.9 2.5 3.4 4.4 4.4C15.6 38 18.4 38 24 38h1V19c0-.6-.4-1-1-1H8.023z' fill='%238AB2FF'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M10 10l25.968 25.968A10.375 10.375 0 0038.9 32.5C40 30.4 40 27.6 40 22s0-8.4-1.1-10.5c-1-1.9-2.5-3.4-4.4-4.4C32.4 6 29.6 6 24 6s-8.4 0-10.5 1.1A9.394 9.394 0 0010 10z' fill='url(%23paint0_linear)'/%3E%3Cdefs%3E%3ClinearGradient id='paint0_linear' x1='34.229' y1='7.359' x2='21.5' y2='21.5' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23fff' stop-opacity='.338'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3Cfilter id='filter0_d' x='0' y='0' width='48' height='48' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeColorMatrix values='0 0 0 0 0 0 0 0 0 0.466667 0 0 0 0 1 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")` },
  { title: 'Календарь', link: 'https://calendar.yandex.ru/week?uid=960255489', icon: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='48' height='48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg filter='url(%23filter0_d)'%3E%3Cpath d='M8 22c0-5.6 0-8.4 1.09-10.54a10 10 0 014.37-4.37C15.6 6 18.4 6 24 6c5.6 0 8.4 0 10.54 1.09a10 10 0 014.37 4.37C40 13.6 40 16.4 40 22c0 5.6 0 8.4-1.09 10.54a10.001 10.001 0 01-4.37 4.37C32.4 38 29.6 38 24 38c-5.6 0-8.4 0-10.54-1.09a10 10 0 01-4.37-4.37C8 30.4 8 27.6 8 22z' fill='%23F33'/%3E%3C/g%3E%3Cdefs%3E%3Cfilter id='filter0_d' x='0' y='0' width='48' height='48' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeColorMatrix values='0 0 0 0 0.6 0 0 0 0 0.12 0 0 0 0 0.12 0 0 0 0.32 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")` },
  { title: 'Премиум', link: 'https://mail360.yandex.ru/premium-plans?from=disk_public_header', icon: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='48' height='48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23a)'%3E%3Crect x='8' y='6' width='32' height='32' rx='10' fill='%23C4C4C4'/%3E%3Crect x='8' y='6' width='32' height='32' rx='10' fill='url(%23b)'/%3E%3Crect x='8' y='6' width='32' height='32' rx='10' fill='url(%23c)'/%3E%3Cpath d='M16.725 21.613c-.292 0-.583.03-.855.07l4.644-2.561v-.95h-8.632v1.009h6.662l-5.347 2.976.422.821s.885-.415 2.453-.415c2.17 0 3.457.534 3.457 1.7 0 1.227-1.246 1.939-3.739 1.939-2.07 0-3.397-.436-4.352-.89v1.048c.794.395 2.221.86 4.362.86 3.015 0 5.086-1.098 5.086-2.937.01-1.81-1.92-2.67-4.161-2.67zm10.071-.267c-1.739 0-3.166.494-3.85 1.275.131-2.304 1.327-3.57 4.162-3.57 1.477 0 2.764.218 4.03.89v-1.047c-1.045-.495-2.261-.86-4.04-.86-3.77 0-5.368 2.224-5.368 5.2 0 2.72 1.257 4.104 4.976 4.104 2.804 0 4.975-1.147 4.975-3.125 0-1.898-1.93-2.867-4.885-2.867zm-.11 4.964c-2.332 0-3.508-.772-3.508-1.988 0-1.256 1.357-1.948 3.588-1.948 2.06 0 3.578.682 3.578 1.938-.01 1.315-1.467 1.998-3.658 1.998zm11.237-8.277c-2.995 0-5.408 1.325-5.408 4.648 0 3.332 2.403 4.657 5.408 4.657 3.005 0 5.408-1.325 5.408-4.647 0-3.333-2.413-4.658-5.408-4.658zm0 8.277c-2.302 0-4.04-.95-4.04-3.65 0-2.659 1.738-3.608 4.04-3.608s4.04.94 4.04 3.648c0 2.66-1.738 3.61-4.04 3.61z' fill='%23fff'/%3E%3Cpath d='M16.725 21.613c-.292 0-.583.03-.855.07l4.644-2.561v-.95h-8.632v1.009h6.662l-5.347 2.976.422.821s.885-.415 2.453-.415c2.17 0 3.457.534 3.457 1.7 0 1.227-1.246 1.939-3.739 1.939-2.07 0-3.397-.436-4.352-.89v1.048c.794.395 2.221.86 4.362.86 3.015 0 5.086-1.098 5.086-2.937.01-1.81-1.92-2.67-4.161-2.67zm10.071-.267c-1.739 0-3.166.494-3.85 1.275.131-2.304 1.327-3.57 4.162-3.57 1.477 0 2.764.218 4.03.89v-1.047c-1.045-.495-2.261-.86-4.04-.86-3.77 0-5.368 2.224-5.368 5.2 0 2.72 1.257 4.104 4.976 4.104 2.804 0 4.975-1.147 4.975-3.125 0-1.898-1.93-2.867-4.885-2.867zm-.11 4.964c-2.332 0-3.508-.772-3.508-1.988 0-1.256 1.357-1.948 3.588-1.948 2.06 0 3.578.682 3.578 1.938-.01 1.315-1.467 1.998-3.658 1.998zm11.237-8.277c-2.995 0-5.408 1.325-5.408 4.648 0 3.332 2.403 4.657 5.408 4.657 3.005 0 5.408-1.325 5.408-4.647 0-3.333-2.413-4.658-5.408-4.658zm0 8.277c-2.302 0-4.04-.95-4.04-3.65 0-2.659 1.738-3.608 4.04-3.608s4.04.94 4.04 3.648c0 2.66-1.738 3.61-4.04 3.61z' stroke='%23fff' stroke-width='.285'/%3E%3C/g%3E%3Cdefs%3E%3CradialGradient id='c' cx='0' cy='0' r='1' gradientUnits='userSpaceOnUse' gradientTransform='matrix(0 30.6667 -32.6112 0 23.908 34.444)'%3E%3Cstop offset='.322' stop-color='%23FF7142'/%3E%3Cstop offset='.825' stop-color='%23FF5525' stop-opacity='0'/%3E%3C/radialGradient%3E%3ClinearGradient id='b' x1='8' y1='22.283' x2='39.957' y2='22.283' gradientUnits='userSpaceOnUse'%3E%3Cstop stop-color='%23EB1C3F'/%3E%3Cstop offset='1' stop-color='%23F4248E'/%3E%3C/linearGradient%3E%3CclipPath id='a'%3E%3Crect x='8' y='6' width='32' height='32' rx='10' fill='%23fff'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E")` },
  //     { title: 'Телемост', link: 'https://telemost.yandex.ru/', icon: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='48' height='48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg'"` },
  //   { title: 'Заметки', link: 'https://disk.yandex.ru/notes', icon: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='48' height='48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg d='M8.12 15.656h.002l23.517 22.092c1.149-.158 2.074-.417 2.901-.838a10 10 0 004.37-4.37C40 30.4 40 27.6 40 22c0-5.6 0-8.4-1.09-10.54a10 10 0 00-4.37-4.37C32.401 6 29.6 6 24 6c-5.6 0-8.4 0-10.54 1.09a10 10 0 00-4.37 4.37c-.569 1.117-.84 2.414-.97 4.196z' fill='%23FF8E3B'/%3E%3Cpath d='M8.12 15.656h.002l23.517 22.092c1.149-.158 2.074-.417 2.901-.838a10 10 0 004.37-4.37C40 30.4 40 27.6 40 22c0-5.6 0-8.4-1.09-10.54a10 10 0 00-4.37-4.37C32.401 6 29.6 6 24 6c-5.6 0-8.4 0-10.54 1.09a10 10 0 00-4.37 4.37c-.569 1.117-.84 2.414-.97 4.196z' fill='url(%23b)'/%3E%3Cpath d='M8.12 15.647C8 17.28 8 19.32 8 22c0 5.6 0 8.4 1.09 10.54a10 10 0 004.37 4.37C15.6 38 18.4 38 24 38c3.436 0 5.818 0 7.64-.252l5.309-18.893a1.178 1.178 0 00-.819-1.448l-2.145-.595a1.104 1.104 0 00-1.36.782c-.096.357.01.73.176 1.06.256.506.335 1.105.177 1.697a2.37 2.37 0 01-2.905 1.684 2.383 2.383 0 01-1.677-2.917 2.373 2.373 0 01.988-1.374c.314-.207.596-.484.694-.848a1.134 1.134 0 00-.79-1.386l-2.402-.665a1.006 1.006 0 00-1.24.712c-.087.326.008.667.166.963a2.38 2.38 0 01.201 1.743 2.37 2.37 0 01-2.904 1.685 2.383 2.383 0 01-1.677-2.918 2.373 2.373 0 011.031-1.402c.29-.183.547-.436.636-.769a1.034 1.034 0 00-.72-1.264l-2.5-.692a1.04 1.04 0 00-1.282.737c-.09.337.008.69.17.998.268.512.353 1.123.192 1.726a2.37 2.37 0 01-2.905 1.685 2.383 2.383 0 01-1.677-2.918 2.373 2.373 0 011.016-1.392c.299-.191.565-.453.657-.797a1.07 1.07 0 00-.745-1.308l-2.342-.649a1.076 1.076 0 00-1.326.763c-.093.348.008.712.173 1.032.262.509.343 1.113.184 1.71a2.37 2.37 0 01-3.874 1.157z' fill='%23F9DB60'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='b' x1='45.651' y1='-14.94' x2='21.019' y2='21.911' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.078' stop-color='%23fff' stop-opacity='.7'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3Cfilter id='a' x='0' y='0' width='48' height='48' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeColorMatrix values='0 0 0 0 0.775 0 0 0 0 0.479185 0 0 0 0 0.03875 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")' fill-rule='evenodd' clip-rule='evenodd'%3E%3Cpath d='M8.12 15.656h.002l23.517 22.092c1.149-.158 2.074-.417 2.901-.838a10 10 0 004.37-4.37C40 30.4 40 27.6 40 22c0-5.6 0-8.4-1.09-10.54a10 10 0 00-4.37-4.37C32.401 6 29.6 6 24 6c-5.6 0-8.4 0-10.54 1.09a10 10 0 00-4.37 4.37c-.569 1.117-.84 2.414-.97 4.196z' fill='%23FF8E3B'/%3E%3Cpath d='M8.12 15.656h.002l23.517 22.092c1.149-.158 2.074-.417 2.901-.838a10 10 0 004.37-4.37C40 30.4 40 27.6 40 22c0-5.6 0-8.4-1.09-10.54a10 10 0 00-4.37-4.37C32.401 6 29.6 6 24 6c-5.6 0-8.4 0-10.54 1.09a10 10 0 00-4.37 4.37c-.569 1.117-.84 2.414-.97 4.196z' fill='%23b'/%3E%3Cpath d='M8.12 15.647C8 17.28 8 19.32 8 22c0 5.6 0 8.4 1.09 10.54a10 10 0 004.37 4.37C15.6 38 18.4 38 24 38c3.436 0 5.818 0 7.64-.252l5.309-18.893a1.178 1.178 0 00-.819-1.448l-2.145-.595a1.104 1.104 0 00-1.36.782c-.096.357.01.73.176 1.06.256.506.335 1.105.177 1.697a2.37 2.37 0 01-2.905 1.684 2.383 2.383 0 01-1.677-2.917 2.373 2.373 0 01.988-1.374c.314-.207.596-.484.694-.848a1.134 1.134 0 00-.79-1.386l-2.402-.665a1.006 1.006 0 00-1.24.712c-.087.326.008.667.166.963a2.38 2.38 0 01.201 1.743 2.37 2.37 0 01-2.904 1.685 2.383 2.383 0 01-1.677-2.918 2.373 2.373 0 011.031-1.402c.29-.183.547-.436.636-.769a1.034 1.034 0 00-.72-1.264l-2.5-.692a1.04 1.04 0 00-1.282.737c-.09.337.008.69.17.998.268.512.353 1.123.192 1.726a2.37 2.37 0 01-2.905 1.685 2.383 2.383 0 01-1.677-2.918 2.373 2.373 0 011.016-1.392c.299-.191.565-.453.657-.797a1.07 1.07 0 00-.745-1.308l-2.342-.649a1.076 1.076 0 00-1.326.763c-.093.348.008.712.173 1.032.262.509.343 1.113.184 1.71a2.37 2.37 0 01-3.874 1.157z' fill='%23F9DB60'/%3E%3C/g%3E%3Cdefs%3E%3ClinearGradient id='b' x1='45.651' y1='-14.94' x2='21.019' y2='21.911' gradientUnits='userSpaceOnUse'%3E%3Cstop offset='.078' stop-color='%23fff' stop-opacity='.7'/%3E%3Cstop offset='1' stop-color='%23fff' stop-opacity='0'/%3E%3C/linearGradient%3E%3Cfilter id='a' x='0' y='0' width='48' height='48' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3E%3CfeFlood flood-opacity='0' result='BackgroundImageFix'/%3E%3CfeColorMatrix in='SourceAlpha' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'/%3E%3CfeOffset dy='2'/%3E%3CfeGaussianBlur stdDeviation='4'/%3E%3CfeColorMatrix values='0 0 0 0 0.775 0 0 0 0 0.479185 0 0 0 0 0.03875 0 0 0 0.25 0'/%3E%3CfeBlend in2='BackgroundImageFix' result='effect1_dropShadow'/%3E%3CfeBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape'/%3E%3C/filter%3E%3C/defs%3E%3C/svg%3E")` },
  //   { title: 'Контакты', link: 'https://mail.yandex.ru/touch/folder/1', icon: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='48' height='48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg")` },
  //   { title: 'Мессенджер', link: 'https://yandex.ru/chat#/', icon: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='48' height='48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg")` }
]

const footerLinks = [
  { title: 'Справка и поддержка', href: 'https://yandex.ru/support/disk/' },
  { title: 'Пожаловаться', href: 'https://yandex.ru/support/abuse/troubleshooting/disk/list.html' },
  { title: 'Участие в исследованиях', href: 'https://yandex.ru/jobs/usability' },
]

function App() {
  const [popUpMore, setPopUpMore] = useState(false)
  const [addPopUp, setAddPopUp] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <div className='header-block1'>
          <a href="https://360.yandex.ru/?from=disk_public-header-360" title="Яндекс" rel="noopener noreferrer" target="_blank">
            <svg width="36" height="36" className='svg-icon'>
              <circle cx="18" cy="18" r="18" fill="#FC3F1D"></circle>
              <path d="M20.67 10.103h-1.822c-3.123 0-4.684 1.561-4.684 3.903 0 2.603 1.04 3.904 3.383 5.465l1.822 1.302-5.205 8.067H10l4.945-7.287c-2.863-2.082-4.425-3.903-4.425-7.287 0-4.163 2.863-7.026 8.328-7.026h5.465v21.6H20.67V10.103z" fill="#fff"></path>
            </svg>
          </a>
          <a href="https://360.yandex.ru/?from=disk_public-header-360" title="Яндекс 360" rel="noopener noreferrer" target="_blank">
            <svg width="76" height="36">
              <path transform="translate(-36)" d="M86.802 21.278c0-4.082-4.082-6.15-10.34-6.15-3.674 0-6.697 1.065-8.139 2.743.273-4.96 2.816-7.669 8.792-7.669 3.129 0 5.85.464 8.516 1.905V9.85C83.426 8.79 80.84 8 77.087 8c-7.972 0-11.348 4.79-11.348 11.184 0 5.85 2.666 8.816 10.532 8.816 5.933 0 10.531-2.477 10.531-6.722zm-10.585 4.518c-4.934 0-7.427-1.66-7.427-4.273 0-2.694 2.868-4.19 7.591-4.19 4.354 0 7.564 1.468 7.564 4.162 0 2.831-3.074 4.3-7.727 4.3zm-28.516-8.68v-.003h.004l11.3-6.392H44.79V8.544H63.18v2.041l-9.821 5.508c.572-.093 1.18-.149 1.797-.149 4.734 0 8.815 1.852 8.815 5.742 0 3.946-4.381 6.314-10.748 6.31-4.517 0-7.536-1.006-9.224-1.85V23.89c2.013.98 4.815 1.904 9.196 1.904 5.279 0 7.92-1.522 7.92-4.162 0-2.498-2.722-3.646-7.32-3.646-3.32 0-5.198.897-5.198.897l-.895-1.765-.002-.001zm43.754.844c0 5.784 3.674 7.835 8.544 7.835 4.87 0 8.544-2.051 8.544-7.755 0-5.805-3.674-7.835-8.544-7.835-4.87 0-8.544 2.03-8.544 7.755zm-2.885.027C88.57 10.853 93.66 8 100 8s11.428 2.853 11.428 10.013c0 7.134-5.089 9.987-11.428 9.987-6.34 0-11.429-2.853-11.429-10.013z" fill="#fff"></path>
            </svg>
          </a>
        </div>
        <div className='header-block2'>
          {linksHeader.map((el, index) =>
            <a className="header-link-block " href={el.link} key={el.title}>
              <div className="header-link-image" style={{ backgroundImage: el.icon }}></div>
              {index === 3 && <span className='block2-link-number'>25</span>}
              <span className='header-link-text'>{el.title}</span>
            </a>
          )}

          <div className="header-link-block " onClick={() => setPopUpMore(!popUpMore)}>
            <div className="header-link-image"
              style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg width='48' height='48' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M20 23a2 2 0 11-4 0 2 2 0 014 0zm6.447 0a2 2 0 11-4 0 2 2 0 014 0zm4.45 2a2 2 0 100-4 2 2 0 000 4z' fill='%23fff' fill-opacity='.8'/%3E%3C/svg%3E")` }}>
            </div>
            <span className='header-link-text'>Ещё</span>
          </div>

          {popUpMore && <PopUpMore moreLinks={[]} />}

        </div>

        <div className='header-block3'>
          <a className='block3-link' href="https://passport.yandex.ru?" target="_parent" >
            <div>
              <img src="https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-middle" className='block3-image' rel='image' title='image' />
            </div>
            <span className="notifications" title="10">
              <span>10</span>
            </span>
          </a>
        </div>

      </header>

      {!addPopUp ?
        <div className='ad-block' >
          <a className='ad-block-link' href='https://yandex.ru/an/count/WXeejI_zO5q1XH00z1rrTKl03A5MSmK0NG8nvGnAP000000ukDmCXfFitvZMxPkV0O01w-TKY07hXzeFa06Qxggqsu20W0AO0VRjghHRk078uPNb9C010jW1efoy4k01rBs61-W1i0Ju0SBQtxu1Y08Se0AinQmFy0AkZeVK1FW2WeY0W83G0uqN-0JwpuWGY0MpqCe5a0NwpuWGe0NukFC4g0Mvxue4i0Mvxue4k0Mvxue4m0Ns_wO4o0NgYem1q0Moxue46doZmQ50PW-f1w_T0945mP0Uk0Uq1j32a806u0ZMejO7w0a7W0e1-0g0jHY02mY82pZe39S2c0tSjK3W3OA0WC60W808c0wQ-8sDd9IGim-G4FojdhR6sTg_QveG2Q0IY181a181wH8V4RYtguDa9AWJm9cruyg8xzFe0O0KW23G50tW507e58m2e1QGywYY1iaMq1R2sj--0PWNZlJ30gWN2RWN0i0NjTO1e1dcgm6m6RWP_m7u6SULf1o16l__czQhrnh6e1hbeUwjjCUEkwq1i1gIlTMzt9QNa3A270rBGa8wRtX4RrDcRMWtg1u1i1y1o1-HZfu9gI3eQ7o4a28AGBWWpkyirIB__t__WIE9a2F8uO75ZVFaxWUO8vdwezp-qgd1EWq0hI9SnX0pHaYROYMF4OZjIVOQY-PmlQSTW_laiOhYw46uuPFcE-GZbzZFt-eO~1?test-tag=65565&amp;banner-test-tags=eyI3MjA1NzYwNjMwNjYxODI1MyI6IjI1NzcwMTIzMjgwIn0%3D"><div class="unit-container ya-unit-item' target='_blank'>
            <div className='img-text'>
              <img src='https://avatars.mds.yandex.net/get-direct/4012453/587nFlCGx9Ofe2SxKI31JA/wy150' className='ad-img1' rel='image' />
              <p>Профессия «Фронтенд-разработчик». Стартуем в апреле</p>
            </div>
            <div className='img-text'>
              <img src='https://favicon.yandex.net/favicon/htmlacademy.ru?size=32&stub=2' rel='image' className='ad-img2' />
              <p>htmlacademy.ru</p>
            </div>
            <div className='img-text'>
              <p>Запускаем новый поток обучения фронтенду. Ваш наставник - опытный разработчик</p>
            </div>
          </a>
          <div className='advertising'>
            <span className='advertising-text'>Реклама</span>
            <div className='block'>
              <div className="advertising-image" onClick={() => setAddPopUp(true)}
                style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 23a2 2 0 11-4 0 2 2 0 014 0zm6.447 0a2 2 0 11-4 0 2 2 0 014 0zm4.45 2a2 2 0 100-4 2 2 0 000 4z' fill='black' fill-opacity='.8'/%3E%3C/svg%3E")` }}>
              </div>
            </div>
          </div>
        </div>
        : <AddPopUp setAddPopUp={setAddPopUp} />}


      <div className='content'>
        <img className='content-image' src="https://downloader.disk.yandex.ru/preview/9bf7c1cd5e3ab04e4222d74baf9f0b5d7b1c5ff0dd3ba10333d3ac58a4802444/64484ad1/fKqInKw3d7bLFOeFnMGnhDbIzm123HmfVaqrJSrPwXL93CXZjoWjTo_dkZcXBdh-KJuPNKFRMFCAeHjSmdVNWnVaq8Q4kdFd-61CXNA7T6Kr8npumZHI4midPdWhecNq?uid=0&amp;filename=%D0%B8%D0%BB%D0%BE%D0%BD%20%281%29.psd&amp;disposition=inline&amp;hash=&amp;limit=0&amp;content_type=image%2Fjpeg&amp;owner_uid=0&amp;tknv=v2&amp;size=2048x2048" rel='image' title='image' />
        <div className='bar-block'>
          <button className='bar' type='button'>
            <div className="bar-image"
              style={{ backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 23a2 2 0 11-4 0 2 2 0 014 0zm6.447 0a2 2 0 11-4 0 2 2 0 014 0zm4.45 2a2 2 0 100-4 2 2 0 000 4z' fill='%23fff' fill-opacity='.8'/%3E%3C/svg%3E")` }}>
            </div>
          </button>
        </div>
      </div>

      <span className='file-name'>илон (1).psd</span>

      <div className='action-button'>
        <button type='button' className='button button1'>
          <svg class="ufo-icon__icon" width="16" height="16" role="none" viewBox="0 0 16 16"><path fill="currentColor" d="M11.916 7.611c.33.688-1.054 2.02-3.094 2.974-2.039.956-3.96 1.173-4.291.486-.331-.687 1.054-2.019 3.093-2.974 2.04-.955 3.961-1.173 4.292-.486z"></path><path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M.16 12.16c-.49-1.018.174-2.614 1.655-4.167a.16.16 0 0 1 .008-.008v-.001l.069-.07c.33-.36.582-.886.835-1.414.092-.193.185-.386.281-.57A5.47 5.47 0 0 1 5.53 3.52a5.554 5.554 0 0 1 4.25-.188c.427.142.828.275 1.377.284 2.168-.145 3.896.315 4.455 1.094.119.103.211.221.275.353.7 1.453-1.874 5.005-6.186 7.025-4.311 2.02-8.729 1.742-9.428.29-.7-1.454 2.088-4.468 6.4-6.488C2.47 7.86-.284 10.771.224 12.263c0 0-.047-.066-.064-.103zm9.006-1.065c-1.764.816-3.83 1.413-5.232 1.419-.703.003-1.297-.08-1.742-.228-.454-.15-.703-.35-.798-.54-.091-.185-.09-.462.083-.848.172-.382.495-.826.96-1.3.927-.945 2.66-2.205 4.437-3.027 1.775-.821 3.993-1.37 5.354-1.484.682-.056 1.252-.024 1.676.084.43.11.658.283.748.466.095.19.043.499-.12.933-.158.425-.547.905-.989 1.431-.883 1.05-2.613 2.279-4.377 3.094z"></path>
          </svg>
          <p className='button1-text'>Сохранить на Яндекс.Диск</p>
        </button>
        <button type='button' className='button button2'>
          <svg class="ufo-icon__icon" width="16" height="16" role="none" viewBox="0 0 16 16"><g fill="currentColor" fill-rule="evenodd"><path d="M13 6l-5 5-5-5z"></path><path d="M6 2h4v5H6zM3 12h10v2H3z"></path></g>
          </svg>
          <p className='button1-text'>Скачать</p>
        </button>
      </div>

      <footer className='footer'>
        <div className='footer-links-block'>
          {footerLinks.map((el) =>
            <a href={el.href} target="_blank" key={el.title}>{el.title}</a>
          )}
        </div>

        <div className='footer-links-block'>
          <span>© 2012—2023</span>
          <a href="https://ya.ru">Яндекс</a>
          <span>
            <svg width="16" height="16" role="none" viewBox="0 0 16 16"><g><path fill="#FFF" d="M0 2h16v4H0z"></path><path fill="#E03A3E" d="M0 10h16v4H0z"></path><path fill="#00539F" d="M0 6h16v4H0z"></path></g></svg>
            <span className='ru-text'>RU</span>
          </span>
        </div>
      </footer>

    </div>
  );
}

export default App;
