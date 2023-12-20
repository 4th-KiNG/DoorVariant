import './Catalog.css'
import React, { useEffect } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import d1 from '../catalog/indoor/1.jpg'
import { d10, d11, d12, d13, d14, d15, d16, d17, d18, d19, d2, d20, d21, d22, d23, d24, d26, d25, d27, d28, d29, d3, d30, d31, d32, d33, d34, d35, d36, d37, d38, d39, d4, d40, d41, d5, d6, d7, d8, d9, o1, o2, o3, o4, o5, o6, o7, o8, o9, o10, o11, o12, o13, o14, o15, o16, o17, o18, o19, o20, o21, o22, o23, o24, o25, o26, o27, o28, o29, o30, o31, o32, o33, o34, o35, o36, o37, o38, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10, h11, h12, h13, h14, h15, h16, h17, h18, k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, l1, l2, l3, l4, l5, l6, l7, l8, o93, o46, o47, o48, o49, o50, o51, o52, o53, o54, o55, o56, o57, o58, o59, o60, o61, o62, o63, o65, o66, o67, o68, o69, o70, o71, o72, o73, o74, o75, o76, o77, o78, o79, o80, o81, o82, o83, o84, o85, o86, o87, o88, o89, o90, o91, o92, o94, o95, o96, o97, o98, o99, o100, o101, o102, o103, o104, o105, o106, o107, o108, o109, o110, o111, o112, o113, o114, o116, o117, o118, } from '../catalog';
import {lr1, lr2, lr3, lr4, lr5, lr6, lr7, lr8, kt1, kt2, kt3, kt4, kt5, kt6, kt7, hl1, hl2, hl3, hl4, hl5} from '../catalog'
import { Element, scroller } from 'react-scroll';
import { lazy, Suspense } from 'react';
import {d42, d43, d44, d45, d46, d47, d48, d49, d50, d51,
    d52, d53, d54, d55, d56, d57, d58, d59, d60, d61,
    d62, d63, d64, d65, d66, d67, d68, d69, d70, d71,
    d72, d73, d74, d75, d76, d77, d78, d79, d80, d81,
    d82, d83, d84, d85, d86, d87, d88, d89, d90, d91,
    d92, d93, d94, d95, d96, d97, d98} from '../catalog';

const CardList = lazy(() => import('../components/CardList'))
const CardListFur = lazy(() => import('../components/CardListFur'))

const Catalog = () => {
    const params = useParams()
    const location = useLocation();
    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const scrollToElement = queryParams.get('scrollToElement');
        if (scrollToElement){
            scroller.scrollTo(scrollToElement, {
                duration: 500,
                smooth: true,
            })
        }
    }, [location.search])
    const outdoors =[
        { id: 1000, img: o1, price: 0 },
        { id: 1001, img: o2, price: 0 },
        { id: 1002, img: o3, price: 0 },
        { id: 1003, img: o4, price: 0 },
        { id: 1004, img: o5, price: 0 },
        { id: 1005, img: o6, price: 0 },
        { id: 1006, img: o7, price: 0 },
        { id: 1007, img: o8, price: 0 },
        { id: 1008, img: o9, price: 0 },
        { id: 1009, img: o10, price: 0 },
        { id: 1010, img: o12, price: 0 },
        { id: 1011, img: o13, price: 1500 },
        { id: 1012, img: o14, price: 0 },
        { id: 1013, img: o15, price: 0 },
        { id: 1014, img: o16, price: 0 },
        { id: 1015, img: o17, price: 0 },
        { id: 1016, img: o18, price: 0 },
        { id: 1017, img: o19, price: 0 },
        { id: 1018, img: o20, price: 0 },
        { id: 1019, img: o21, price: 0 },
        { id: 1020, img: o22, price: 0 },
        { id: 1021, img: o23, price: 0 },
        { id: 1022, img: o24, price: 0 },
        { id: 1023, img: o25, price: 0 },
        { id: 1024, img: o26, price: 0 },
        { id: 1025, img: o27, price: 0 },
        { id: 1026, img: o28, price: 0 },
        { id: 1027, img: o29, price: 0 },
        { id: 1028, img: o30, price: 0 },
        { id: 1029, img: o31, price: 0 },
        { id: 1030, img: o32, price: 0 },
        { id: 1031, img: o33, price: 0 },
        { id: 1032, img: o34, price: 0 },
        { id: 1033, img: o35, price: 0 },
        { id: 1034, img: o36, price: 0 },
        { id: 1035, img: o37, price: 0 },
        { id: 1036, img: o38, price: 0 },
        { id: 1037, img: o11, price: 0 },
        { id: 1038, img: o46, price: 0 },
        { id: 1039, img: o47, price: 0 },
        { id: 1040, img: o48, price: 0 },
        { id: 1041, img: o49, price: 0 },
        { id: 1042, img: o50, price: 0 },
        { id: 1043, img: o51, price: 0 },
        { id: 1044, img: o52, price: 0 },
        { id: 1045, img: o53, price: 0 },
        { id: 1046, img: o54, price: 0 },
        { id: 1047, img: o55, price: 0 },
        { id: 1048, img: o56, price: 0 },
        { id: 1049, img: o57, price: 0 },
        { id: 1050, img: o58, price: 0 },
        { id: 1051, img: o59, price: 0 },
        { id: 1052, img: o60, price: 0 },
        { id: 1053, img: o61, price: 0 },
        { id: 1054, img: o62, price: 0 },
        { id: 1055, img: o63, price: 0 },
        { id: 1056, img: o65, price: 0 },
        { id: 1057, img: o66, price: 0 },
        { id: 1058, img: o67, price: 0 },
        { id: 1059, img: o68, price: 0 },
        { id: 1060, img: o69, price: 0 },
        { id: 1061, img: o70, price: 0 },
        { id: 1062, img: o71, price: 0 },
        { id: 1063, img: o72, price: 0 },
        { id: 1064, img: o73, price: 0 },
        { id: 1065, img: o74, price: 0 },
        { id: 1066, img: o75, price: 0 },
        { id: 1067, img: o76, price: 0 },
        { id: 1068, img: o77, price: 0 },
        { id: 1069, img: o78, price: 0 },
        { id: 1070, img: o79, price: 0 },
        { id: 1071, img: o80, price: 0 },
        { id: 1072, img: o81, price: 0 },
        { id: 1073, img: o82, price: 0 },
        { id: 1074, img: o83, price: 0 },
        { id: 1075, img: o84, price: 0 },
        { id: 1076, img: o85, price: 0 },
        { id: 1077, img: o86, price: 0 },
        { id: 1078, img: o87, price: 0 },
        { id: 1079, img: o88, price: 0 },
        { id: 1080, img: o89, price: 0 },
        { id: 1081, img: o90, price: 0 },
        { id: 1082, img: o91, price: 0 },
        { id: 1083, img: o92, price: 0 },
        { id: 1084, img: o93, price: 0 },
        { id: 1085, img: o94, price: 0 },
        { id: 1086, img: o95, price: 0 },
        { id: 1087, img: o96, price: 0 },
        { id: 1088, img: o97, price: 0 },
        { id: 1089, img: o98, price: 0 },
        { id: 1090, img: o99, price: 0 },
        { id: 1091, img: o100, price: 0 },
        { id: 1092, img: o101, price: 0 },
        { id: 1093, img: o102, price: 0 },
        { id: 1094, img: o103, price: 0 },
        { id: 1095, img: o104, price: 0 },
        { id: 1096, img: o105, price: 0 },
        { id: 1097, img: o106, price: 0 },
        { id: 1098, img: o107, price: 0 },
        { id: 1099, img: o108, price: 0 },
        { id: 1100, img: o109, price: 0 },
        { id: 1101, img: o110, price: 0 },
        { id: 1102, img: o111, price: 0 },
        { id: 1103, img: o112, price: 0 },
        { id: 1104, img: o113, price: 0 },
        { id: 1105, img: o114, price: 0 },
        { id: 1106, img: o116, price: 0 },
        { id: 1107, img: o117, price: 0 },
        { id: 1108, img: o118, price: 0 },
    ]
    const indoors = [
        { id: 2000, img: d1, price: 0 },
        { id: 2001, img: d2, price: 0 },
        { id: 2002, img: d3, price: 0 },
        { id: 2003, img: d4, price: 0 },
        { id: 2004, img: d5, price: 0 },
        { id: 2005, img: d6, price: 0 },
        { id: 2006, img: d7, price: 0 },
        { id: 2007, img: d8, price: 0 },
        { id: 2008, img: d9, price: 0 },
        { id: 2009, img: d10, price: 0 },
        { id: 2010, img: d12, price: 0 },
        { id: 2011, img: d13, price: 1500 },
        { id: 2012, img: d14, price: 0 },
        { id: 2013, img: d15, price: 0 },
        { id: 2014, img: d16, price: 0 },
        { id: 2015, img: d17, price: 0 },
        { id: 2016, img: d18, price: 0 },
        { id: 2017, img: d19, price: 0 },
        { id: 2018, img: d20, price: 0 },
        { id: 2019, img: d21, price: 0 },
        { id: 2020, img: d22, price: 0 },
        { id: 2021, img: d23, price: 0 },
        { id: 2022, img: d24, price: 0 },
        { id: 2023, img: d25, price: 0 },
        { id: 2024, img: d26, price: 0 },
        { id: 2025, img: d27, price: 0 },
        { id: 2026, img: d28, price: 0 },
        { id: 2027, img: d29, price: 0 },
        { id: 2028, img: d30, price: 0 },
        { id: 2029, img: d31, price: 0 },
        { id: 2030, img: d32, price: 0 },
        { id: 2031, img: d33, price: 0 },
        { id: 2032, img: d34, price: 0 },
        { id: 2033, img: d35, price: 0 },
        { id: 2034, img: d36, price: 0 },
        { id: 2035, img: d37, price: 0 },
        { id: 2036, img: d38, price: 0 },
        { id: 2037, img: d11, price: 0 },
        { id: 2038, img: d46, price: 0 },
        { id: 2039, img: d47, price: 0 },
        { id: 2040, img: d48, price: 0 },
        { id: 2041, img: d49, price: 0 },
        { id: 2042, img: d50, price: 0 },
        { id: 2043, img: d51, price: 0 },
        { id: 2044, img: d52, price: 0 },
        { id: 2045, img: d53, price: 0 },
        { id: 2046, img: d54, price: 0 },
        { id: 2047, img: d55, price: 0 },
        { id: 2048, img: d56, price: 0 },
        { id: 2049, img: d57, price: 0 },
        { id: 2050, img: d58, price: 0 },
        { id: 2051, img: d59, price: 0 },
        { id: 2052, img: d60, price: 0 },
        { id: 2053, img: d61, price: 0 },
        { id: 2054, img: d62, price: 0 },
        { id: 2055, img: d63, price: 0 },
        { id: 2056, img: d65, price: 0 },
        { id: 2057, img: d66, price: 0 },
        { id: 2058, img: d67, price: 0 },
        { id: 2059, img: d68, price: 0 },
        { id: 2060, img: d69, price: 0 },
        { id: 2061, img: d70, price: 0 },
        { id: 2062, img: d71, price: 0 },
        { id: 2063, img: d72, price: 0 },
        { id: 2064, img: d73, price: 0 },
        { id: 2065, img: d74, price: 0 },
        { id: 2066, img: d75, price: 0 },
        { id: 2067, img: d76, price: 0 },
        { id: 2068, img: d77, price: 0 },
        { id: 2069, img: d78, price: 0 },
        { id: 2070, img: d79, price: 0 },
        { id: 2071, img: d80, price: 0 },
        { id: 2072, img: d81, price: 0 },
        { id: 2073, img: d82, price: 0 },
        { id: 2074, img: d83, price: 0 },
        { id: 2075, img: d84, price: 0 },
        { id: 2076, img: d85, price: 0 },
        { id: 2077, img: d86, price: 0 },
        { id: 2078, img: d87, price: 0 },
        { id: 2079, img: d88, price: 0 },
        { id: 2080, img: d89, price: 0 },
        { id: 2081, img: d90, price: 0 },
        { id: 2082, img: d91, price: 0 },
        { id: 2083, img: d92, price: 0 },
        { id: 2084, img: d93, price: 0 },
        { id: 2085, img: d94, price: 0 },
        { id: 2086, img: d95, price: 0 },
        { id: 2087, img: d96, price: 0 },
        { id: 2088, img: d97, price: 0 },
        { id: 2089, img: d98, price: 0 }
    ];
    const handles = [
        {id: 300,img: h1,price: 0},
        {id: 301,img: h2,price: 0},
        {id: 302,img: h3,price: 0},
        {id: 303,img: h4,price: 0},
        {id: 304,img: h5,price: 0},
        {id: 305,img: h6,price: 0},
        {id: 306,img: h7,price: 0},
        {id: 307,img: h8,price: 0},
        {id: 308,img: h9,price: 0},
        {id: 309,img: h10,price: 0},
        {id: 310,img: h11, price: 0},
        {id:310, img: h12, price:0}, 
        {id:311, img: h13, price:1500}, 
        {id:312, img: h14, price:0}, 
        {id:313, img: h15, price:0}, 
        {id:314, img: h16, price:0}, 
        {id:315, img: h17, price:0}, 
        {id:316, img: h18, price:0}, 
    ]
    const locks = [
        {id: 400,img: k1,price: 0},
        {id: 401,img: k2,price: 0},
        {id: 402,img: k3,price: 0},
        {id: 403,img: k4,price: 0},
        {id: 404,img: k5,price: 0},
        {id: 405,img: k6,price: 0},
        {id: 406,img: k7,price: 0},
        {id: 407,img: k8,price: 0},
        {id: 408,img: k9,price: 0},
        {id: 409,img: k10,price: 0},
    ]
    const loops = [
        {id: 500,img: l1,price: 0},
        {id: 501,img: l2,price: 0},
        {id: 502,img: l3,price: 0},
        {id: 503,img: l4,price: 0},
        {id: 504,img: l5,price: 0},
        {id: 505,img: l6,price: 0},
        {id: 506,img: l7,price: 0},
        {id: 507,img: l8,price: 0},
    ]
    const livingroom = [
        {id: 600,img: lr1,price: 0},
        {id: 601,img: lr2,price: 0},
        {id: 602,img: lr3,price: 0},
        {id: 603,img: lr4,price: 0},
        {id: 604,img: lr5,price: 0},
        {id: 605,img: lr6,price: 0},
        {id: 606,img: lr7,price: 0},
        {id: 607,img: lr8,price: 0},
    ]
    const kitchen = [
        {id: 700,img: kt1,price: 0},
        {id: 701,img: kt2,price: 0},
        {id: 702,img: kt3,price: 0},
        {id: 703,img: kt4,price: 0},
        {id: 704,img: kt5,price: 0},
        {id: 705,img: kt6,price: 0},
        {id: 706,img: kt7,price: 0},
    ]
    const hall = [
        {id: 800,img: hl1,price: 0},
        {id: 801,img: hl2,price: 0},
        {id: 802,img: hl3,price: 0},
        {id: 803,img: hl4,price: 0},
        {id: 804,img: hl5,price: 0},
    ]
    return (
        <div className='catalog'>
            <div className='filters'>
                <p className='filters-txt' onClick={() => scroller.scrollTo('outdoor', { duration: 500, smooth: true })}>Входные двери</p>
                <p className='filters-txt' onClick={() => scroller.scrollTo('indoor', { duration: 500, smooth: true })}>Межкомнатные двери</p>
                <p className='filters-txt' onClick={() => scroller.scrollTo('fur')}>Фуринитура</p>
                <p className='filters-txt' onClick={() => scroller.scrollTo('floor')}>Напольное покрытие</p>
            </div>
            <h1 className='catalog-lb'>Каталог</h1>
            <Element name='outdoor'><h2 className='indoor-lb' id='outdoor'>Входные двери</h2></Element>
            <Suspense fallback={<div>Загрузка...</div>}>
                <CardList item={outdoors} />
            </Suspense>
            <Element name='indoor'><h2 className='indoor-lb' id='indoor'>Межкомнатные двери</h2></Element>
            <Suspense fallback={<div>Загрузка...</div>}>
                <CardList item={indoors} />
            </Suspense>
            <Element name='fur'><h2 className='indoor-lb' id='fur'>Фуринитура</h2></Element>
            <h2 className='indoor-lb fur'>Дверные ручки</h2>
            <Suspense fallback={<div>Загрузка...</div>}>
                <CardListFur item={handles} />
            </Suspense>
            <h2 className='indoor-lb fur'>Замки</h2>
            <Suspense fallback={<div>Загрузка...</div>}>
                <CardListFur item={locks} />
            </Suspense>
            <h2 className='indoor-lb fur'>Петли</h2>
            <Suspense fallback={<div>Загрузка...</div>}>
                <CardListFur item={loops} />
            </Suspense>
            <Element name='floor'><h2 className='indoor-lb' id='floor'>Напольное покрытие</h2></Element>
            <h2 className='indoor-lb fur'>Для гостинной</h2>
            <Suspense fallback={<div>Загрузка...</div>}>
                <CardListFur item={livingroom} />
            </Suspense>
            <h2 className='indoor-lb fur'>Для кухни</h2>
            <Suspense fallback={<div>Загрузка...</div>}>
                <CardListFur item={kitchen} />
            </Suspense>
            <h2 className='indoor-lb fur'>Для прихожей</h2>
            <Suspense fallback={<div>Загрузка...</div>}>
                <CardListFur item={hall} />
            </Suspense>
        </div>
    );
};

export default Catalog;