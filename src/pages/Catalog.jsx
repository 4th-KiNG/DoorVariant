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
    d92, d93, d94, d95, d96, d97, d98,
    d99, d100, d101, d102, d103, d104, d105, d106, d107, d108, d109, d110, d111, d112, d113, d114, d115, d116, d117, d118, d119, d120, d121, d122, d123, d124, d125, d126, d127, d128, d129, d130, d131, d132, d133, d134, d135, d136, d137, d138, d139, d140, d141, d142, d143, d144, d145, d146, d147, d148, d149, d150, d151, d152, d153, d154, d155, d156, d157, d158, d159, d160, d161, d162, d163, d164, d165, d166, d167, d168, d169, d170, d171, d172, d173, d174, d175, d176, d177, d178, d179, d180, d181, d182, d183, d184, d185, d186, d187, d188, d189, d190, d191, d192, d193, d194, d195, d196, d197, d198, d199, d200, d201, d202, d203, d204, d205, d206, d207, d208, d209, d210, d211, d212, d213, d214, d215, d216, d217, d218, d219, d220, d221, d222, d223, d224, d225, d226, d227, d228, d229, d230, d231, d232, d233, d234, d235, d236, d237, d238, d239, d240, d241, d242, d243, d244, d245, d246, d247, d248, d249, d250, d251, d252, d253, d254, d255, d256, d257, d258, d259, d260, d261, d262, d263, d264, d265, d266, d267, d268, d269, d270, d271, d272, d273, d274, d275, d276, d277, d278, d279, d280, d281, d282, d283, d284, d285, d286, d287, d288, d289, d290, d291, d292, d293, d294, d295, d296, d297, d298, d299, d300, d301, d302, d303, d304, d305, d306, d307, d308, d309, d310, d311, d312, d313, d314, d315, d316, d317, d318, d319, d320, d321, d322, d323, d324, d325, d326, d327, d328, d329, d330, d331, d332, d333, d334, d335, d336, d337, d338, d339, d340, d341, d342, d343, d344, d345, d346, d347, d348, d349, d350, d351, d352, d353, d354, d355, d356, d357, d358, d359, d360, d361, d362, d363, d364, d365, d366, d367, d368, d369, d370, d371, d372, d373, d374, d375, d376, d377, d378, d379, } from '../catalog';

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
        { id: 2089, img: d98, price: 0 },
        {id: 2090, img: d99, price: 0},
{id: 2091, img: d100, price: 0},
{id: 2092, img: d101, price: 0},
{id: 2093, img: d102, price: 0},
{id: 2094, img: d103, price: 0},
{id: 2095, img: d104, price: 0},
{id: 2096, img: d105, price: 0},
{id: 2097, img: d106, price: 0},
{id: 2098, img: d107, price: 0},
{id: 2099, img: d108, price: 0},
{id: 2100, img: d109, price: 0},
{id: 2101, img: d110, price: 0},
{id: 2102, img: d111, price: 0},
{id: 2103, img: d112, price: 0},
{id: 2104, img: d113, price: 0},
{id: 2105, img: d114, price: 0},
{id: 2106, img: d115, price: 0},
{id: 2107, img: d116, price: 0},
{id: 2108, img: d117, price: 0},
{id: 2109, img: d118, price: 0},
{id: 2110, img: d119, price: 0},
{id: 2111, img: d120, price: 0},
{id: 2112, img: d121, price: 0},
{id: 2113, img: d122, price: 0},
{id: 2114, img: d123, price: 0},
{id: 2115, img: d124, price: 0},
{id: 2116, img: d125, price: 0},
{id: 2117, img: d126, price: 0},
{id: 2118, img: d127, price: 0},
{id: 2119, img: d128, price: 0},
{id: 2120, img: d129, price: 0},
{id: 2121, img: d130, price: 0},
{id: 2122, img: d131, price: 0},
{id: 2123, img: d132, price: 0},
{id: 2124, img: d133, price: 0},
{id: 2125, img: d134, price: 0},
{id: 2126, img: d135, price: 0},
{id: 2127, img: d136, price: 0},
{id: 2128, img: d137, price: 0},
{id: 2129, img: d138, price: 0},
{id: 2130, img: d139, price: 0},
{id: 2131, img: d140, price: 0},
{id: 2132, img: d141, price: 0},
{id: 2133, img: d142, price: 0},
{id: 2134, img: d143, price: 0},
{id: 2135, img: d144, price: 0},
{id: 2136, img: d145, price: 0},
{id: 2137, img: d146, price: 0},
{id: 2138, img: d147, price: 0},
{id: 2139, img: d148, price: 0},
{id: 2140, img: d149, price: 0},
{id: 2141, img: d150, price: 0},
{id: 2142, img: d151, price: 0},
{id: 2143, img: d152, price: 0},
{id: 2144, img: d153, price: 0},
{id: 2145, img: d154, price: 0},
{id: 2146, img: d155, price: 0},
{id: 2147, img: d156, price: 0},
{id: 2148, img: d157, price: 0},
{id: 2149, img: d158, price: 0},
{id: 2150, img: d159, price: 0},
{id: 2151, img: d160, price: 0},
{id: 2152, img: d161, price: 0},
{id: 2153, img: d162, price: 0},
{id: 2154, img: d163, price: 0},
{id: 2155, img: d164, price: 0},
{id: 2156, img: d165, price: 0},
{id: 2157, img: d166, price: 0},
{id: 2158, img: d167, price: 0},
{id: 2159, img: d168, price: 0},
{id: 2160, img: d169, price: 0},
{id: 2161, img: d170, price: 0},
{id: 2162, img: d171, price: 0},
{id: 2163, img: d172, price: 0},
{id: 2164, img: d173, price: 0},
{id: 2165, img: d174, price: 0},
{id: 2166, img: d175, price: 0},
{id: 2167, img: d176, price: 0},
{id: 2168, img: d177, price: 0},
{id: 2169, img: d178, price: 0},
{id: 2170, img: d179, price: 0},
{id: 2171, img: d180, price: 0},
{id: 2172, img: d181, price: 0},
{id: 2173, img: d182, price: 0},
{id: 2174, img: d183, price: 0},
{id: 2175, img: d184, price: 0},
{id: 2176, img: d185, price: 0},
{id: 2177, img: d186, price: 0},
{id: 2178, img: d187, price: 0},
{id: 2179, img: d188, price: 0},
{id: 2180, img: d189, price: 0},
{id: 2181, img: d190, price: 0},
{id: 2182, img: d191, price: 0},
{id: 2183, img: d192, price: 0},
{id: 2184, img: d193, price: 0},
{id: 2185, img: d194, price: 0},
{id: 2186, img: d195, price: 0},
{id: 2187, img: d196, price: 0},
{id: 2188, img: d197, price: 0},
{id: 2189, img: d198, price: 0},
{id: 2190, img: d199, price: 0},
{id: 2191, img: d200, price: 0},
{id: 2192, img: d201, price: 0},
{id: 2193, img: d202, price: 0},
{id: 2194, img: d203, price: 0},
{id: 2195, img: d204, price: 0},
{id: 2196, img: d205, price: 0},
{id: 2197, img: d206, price: 0},
{id: 2198, img: d207, price: 0},
{id: 2199, img: d208, price: 0},
{id: 2200, img: d209, price: 0},
{id: 2201, img: d210, price: 0},
{id: 2202, img: d211, price: 0},
{id: 2203, img: d212, price: 0},
{id: 2204, img: d213, price: 0},
{id: 2205, img: d214, price: 0},
{id: 2206, img: d215, price: 0},
{id: 2207, img: d216, price: 0},
{id: 2208, img: d217, price: 0},
{id: 2209, img: d218, price: 0},
{id: 2210, img: d219, price: 0},
{id: 2211, img: d220, price: 0},
{id: 2212, img: d221, price: 0},
{id: 2213, img: d222, price: 0},
{id: 2214, img: d223, price: 0},
{id: 2215, img: d224, price: 0},
{id: 2216, img: d225, price: 0},
{id: 2217, img: d226, price: 0},
{id: 2218, img: d227, price: 0},
{id: 2219, img: d228, price: 0},
{id: 2220, img: d229, price: 0},
{id: 2221, img: d230, price: 0},
{id: 2222, img: d231, price: 0},
{id: 2223, img: d232, price: 0},
{id: 2224, img: d233, price: 0},
{id: 2225, img: d234, price: 0},
{id: 2226, img: d235, price: 0},
{id: 2227, img: d236, price: 0},
{id: 2228, img: d237, price: 0},
{id: 2229, img: d238, price: 0},
{id: 2230, img: d239, price: 0},
{id: 2231, img: d240, price: 0},
{id: 2232, img: d241, price: 0},
{id: 2233, img: d242, price: 0},
{id: 2234, img: d243, price: 0},
{id: 2235, img: d244, price: 0},
{id: 2236, img: d245, price: 0},
{id: 2237, img: d246, price: 0},
{id: 2238, img: d247, price: 0},
{id: 2239, img: d248, price: 0},
{id: 2240, img: d249, price: 0},
{id: 2241, img: d250, price: 0},
{id: 2242, img: d251, price: 0},
{id: 2243, img: d252, price: 0},
{id: 2244, img: d253, price: 0},
{id: 2245, img: d254, price: 0},
{id: 2246, img: d255, price: 0},
{id: 2247, img: d256, price: 0},
{id: 2248, img: d257, price: 0},
{id: 2249, img: d258, price: 0},
{id: 2250, img: d259, price: 0},
{id: 2251, img: d260, price: 0},
{id: 2252, img: d261, price: 0},
{id: 2253, img: d262, price: 0},
{id: 2254, img: d263, price: 0},
{id: 2255, img: d264, price: 0},
{id: 2256, img: d265, price: 0},
{id: 2257, img: d266, price: 0},
{id: 2258, img: d267, price: 0},
{id: 2259, img: d268, price: 0},
{id: 2260, img: d269, price: 0},
{id: 2261, img: d270, price: 0},
{id: 2262, img: d271, price: 0},
{id: 2263, img: d272, price: 0},
{id: 2264, img: d273, price: 0},
{id: 2265, img: d274, price: 0},
{id: 2266, img: d275, price: 0},
{id: 2267, img: d276, price: 0},
{id: 2268, img: d277, price: 0},
{id: 2269, img: d278, price: 0},
{id: 2270, img: d279, price: 0},
{id: 2271, img: d280, price: 0},
{id: 2272, img: d281, price: 0},
{id: 2273, img: d282, price: 0},
{id: 2274, img: d283, price: 0},
{id: 2275, img: d284, price: 0},
{id: 2276, img: d285, price: 0},
{id: 2277, img: d286, price: 0},
{id: 2278, img: d287, price: 0},
{id: 2279, img: d288, price: 0},
{id: 2280, img: d289, price: 0},
{id: 2281, img: d290, price: 0},
{id: 2282, img: d291, price: 0},
{id: 2283, img: d292, price: 0},
{id: 2284, img: d293, price: 0},
{id: 2285, img: d294, price: 0},
{id: 2286, img: d295, price: 0},
{id: 2287, img: d296, price: 0},
{id: 2288, img: d297, price: 0},
{id: 2289, img: d298, price: 0},
{id: 2290, img: d299, price: 0},
{id: 2291, img: d300, price: 0},
{id: 2292, img: d301, price: 0},
{id: 2293, img: d302, price: 0},
{id: 2294, img: d303, price: 0},
{id: 2295, img: d304, price: 0},
{id: 2296, img: d305, price: 0},
{id: 2297, img: d306, price: 0},
{id: 2298, img: d307, price: 0},
{id: 2299, img: d308, price: 0},
{id: 2300, img: d309, price: 0},
{id: 2301, img: d310, price: 0},
{id: 2302, img: d311, price: 0},
{id: 2303, img: d312, price: 0},
{id: 2304, img: d313, price: 0},
{id: 2305, img: d314, price: 0},
{id: 2306, img: d315, price: 0},
{id: 2307, img: d316, price: 0},
{id: 2308, img: d317, price: 0},
{id: 2309, img: d318, price: 0},
{id: 2310, img: d319, price: 0},
{id: 2311, img: d320, price: 0},
{id: 2312, img: d321, price: 0},
{id: 2313, img: d322, price: 0},
{id: 2314, img: d323, price: 0},
{id: 2315, img: d324, price: 0},
{id: 2316, img: d325, price: 0},
{id: 2317, img: d326, price: 0},
{id: 2318, img: d327, price: 0},
{id: 2319, img: d328, price: 0},
{id: 2320, img: d329, price: 0},
{id: 2321, img: d330, price: 0},
{id: 2322, img: d331, price: 0},
{id: 2323, img: d332, price: 0},
{id: 2324, img: d333, price: 0},
{id: 2325, img: d334, price: 0},
{id: 2326, img: d335, price: 0},
{id: 2327, img: d336, price: 0},
{id: 2328, img: d337, price: 0},
{id: 2329, img: d338, price: 0},
{id: 2330, img: d339, price: 0},
{id: 2331, img: d340, price: 0},
{id: 2332, img: d341, price: 0},
{id: 2333, img: d342, price: 0},
{id: 2334, img: d343, price: 0},
{id: 2335, img: d344, price: 0},
{id: 2336, img: d345, price: 0},
{id: 2337, img: d346, price: 0},
{id: 2338, img: d347, price: 0},
{id: 2339, img: d348, price: 0},
{id: 2340, img: d349, price: 0},
{id: 2341, img: d350, price: 0},
{id: 2342, img: d351, price: 0},
{id: 2343, img: d352, price: 0},
{id: 2344, img: d353, price: 0},
{id: 2345, img: d354, price: 0},
{id: 2346, img: d355, price: 0},
{id: 2347, img: d356, price: 0},
{id: 2348, img: d357, price: 0},
{id: 2349, img: d358, price: 0},
{id: 2350, img: d359, price: 0},
{id: 2351, img: d360, price: 0},
{id: 2352, img: d361, price: 0},
{id: 2353, img: d362, price: 0},
{id: 2354, img: d363, price: 0},
{id: 2355, img: d364, price: 0},
{id: 2356, img: d365, price: 0},
{id: 2357, img: d366, price: 0},
{id: 2358, img: d367, price: 0},
{id: 2359, img: d368, price: 0},
{id: 2360, img: d369, price: 0},
{id: 2361, img: d370, price: 0},
{id: 2362, img: d371, price: 0},
{id: 2363, img: d372, price: 0},
{id: 2364, img: d373, price: 0},
{id: 2365, img: d374, price: 0},
{id: 2366, img: d375, price: 0},
{id: 2367, img: d376, price: 0},
{id: 2368, img: d377, price: 0},
{id: 2369, img: d378, price: 0},
{id: 2370, img: d379, price: 0},
    ];
    const handles = [
        {id: 3000,img: h1,price: 0},
        {id: 3001,img: h2,price: 0},
        {id: 3002,img: h3,price: 0},
        {id: 3003,img: h4,price: 0},
        {id: 3004,img: h5,price: 0},
        {id: 3005,img: h6,price: 0},
        {id: 3006,img: h7,price: 0},
        {id: 3007,img: h8,price: 0},
        {id: 3008,img: h9,price: 0},
        {id: 3009,img: h10,price: 0},
        {id: 3011,img: h11, price: 0},
        {id:3012, img: h12, price:0}, 
        {id:3013, img: h13, price:1500}, 
        {id:3014, img: h14, price:0}, 
        {id:3015, img: h15, price:0}, 
        {id:3016, img: h16, price:0}, 
        {id:3017, img: h17, price:0}, 
        {id:3018, img: h18, price:0}, 
    ]
    const locks = [
        {id: 4000,img: k1,price: 0},
        {id: 4001,img: k2,price: 0},
        {id: 4002,img: k3,price: 0},
        {id: 4003,img: k4,price: 0},
        {id: 4004,img: k5,price: 0},
        {id: 4005,img: k6,price: 0},
        {id: 4006,img: k7,price: 0},
        {id: 4007,img: k8,price: 0},
        {id: 4008,img: k9,price: 0},
        {id: 4009,img: k10,price: 0},
    ]
    const loops = [
        {id: 5000,img: l1,price: 0},
        {id: 5001,img: l2,price: 0},
        {id: 5002,img: l3,price: 0},
        {id: 5003,img: l4,price: 0},
        {id: 5004,img: l5,price: 0},
        {id: 5005,img: l6,price: 0},
        {id: 5006,img: l7,price: 0},
        {id: 5007,img: l8,price: 0},
    ]
    const livingroom = [
        {id: 6000,img: lr1,price: 0},
        {id: 6001,img: lr2,price: 0},
        {id: 6002,img: lr3,price: 0},
        {id: 6003,img: lr4,price: 0},
        {id: 6004,img: lr5,price: 0},
        {id: 6005,img: lr6,price: 0},
        {id: 6006,img: lr7,price: 0},
        {id: 6007,img: lr8,price: 0},
    ]
    const kitchen = [
        {id: 7000,img: kt1,price: 0},
        {id: 7001,img: kt2,price: 0},
        {id: 7002,img: kt3,price: 0},
        {id: 7003,img: kt4,price: 0},
        {id: 7004,img: kt5,price: 0},
        {id: 7005,img: kt6,price: 0},
        {id: 7006,img: kt7,price: 0},
    ]
    const hall = [
        {id: 8000,img: hl1,price: 0},
        {id: 8001,img: hl2,price: 0},
        {id: 8002,img: hl3,price: 0},
        {id: 8003,img: hl4,price: 0},
        {id: 8004,img: hl5,price: 0},
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