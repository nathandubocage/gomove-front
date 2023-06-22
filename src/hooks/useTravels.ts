import { useEffect, useState } from "react";
// import travelRepository from "../repositories/travelRepository";
import { TTravel } from "../types/travel.spec";

function useTravels(): TTravel[] {
  const [travels, setTravels] = useState<TTravel[] | any>([]);

  const getTravels = async () => {
    try {
      // TO DO: Rendre les paramètres dynamiques
    //   const travelParams = {
    //     nbPassagers: "1",
    //     priceRange: "500",
    //     departurePlace: "/m/0d8r8",
    //     startDate: "2023-06-30",
    //     endDate: "2023-07-03",
    //     nbStopovers: "0",
    //     duration: "weekend",
    //   };

      // const response = await travelRepository.getTravels(travelParams);
      // setTravels(response.data);
      setTravels([
        {
            "id": "/m/01b85",
            "destination": {
                "city": "Bordeaux",
                "country": "France",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT-E0Wp1CSrOIzSfL7Ed1irGj6CvzcpP4t6wvbpV0I3A32COycBlJ5pDtcBBnut52bmYsaWlmzvZy3PVV-aez8cXYoApI16QmuPrG1-9w",
                "distance": null
            },
            "date": {
                "start": "2023-11-04",
                "end": "2023-11-06"
            },
            "transport": [
                {
                    "price": 52,
                    "company": "easyJet",
                    "airport": "BOD"
                }
            ]
        },
        {
            "id": "/m/0cp6w",
            "destination": {
                "city": "Nice",
                "country": "France",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVrd4pIWyp53uW7opuAsZZF94y5I1TULlSoiUOgEh8dY5ztx83s0l7uejpIucv6hfZCD6_3PZoeA502bplg1X94c8pt2eL7GfT4NvsCg",
                "distance": null
            },
            "date": {
                "start": "2023-10-12",
                "end": "2023-10-16"
            },
            "transport": [
                {
                    "price": 61,
                    "company": "easyJet",
                    "airport": "NCE"
                }
            ]
        },
        {
            "id": "/m/01f62",
            "destination": {
                "city": "Barcelona",
                "country": "Spain",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR2Zry5fT8CDZ7BzRos141fuxjtJEVf2oicTxcSGYPDETRNheDbbishAau7MbwyXyFJkgxtES2fk7TbwQ8aVuTGSxWLprnqK9yCfu0_g",
                "distance": null
            },
            "date": {
                "start": "2023-09-01",
                "end": "2023-09-04"
            },
            "transport": [
                {
                    "price": 98,
                    "company": "Volotea",
                    "airport": "BCN"
                }
            ]
        },
        {
            "id": "/m/06c62",
            "destination": {
                "city": "Rome",
                "country": "Italy",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQbPDHRJ1mpe3Ciqhm0quXXrKsDcz2TFBAJZrdC9aINdpgSwAxbdlGVr0n7KCOhIkfKc3kK3BTeeb-muzbqKNxrwqugqC0U0Rh7IhLxyg",
                "distance": null
            },
            "date": {
                "start": "2023-07-06",
                "end": "2023-07-09"
            },
            "transport": [
                {
                    "price": 71,
                    "company": "Volotea",
                    "airport": "FCO"
                }
            ]
        },
        {
            "id": "/m/04llb",
            "destination": {
                "city": "Lisbon",
                "country": "Portugal",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTi-3njUkXEYdomku6zLNILg9DH5_v50zXJVvsDvf22pr60vFZIn0TCKhcPTkmQwQdLQSgml-e83PrkO4Rc-iTqJyxAbTLD2WkDu8zg4w",
                "distance": null
            },
            "date": {
                "start": "2023-10-12",
                "end": "2023-10-16"
            },
            "transport": [
                {
                    "price": 132,
                    "company": "easyJet",
                    "airport": "LIS"
                }
            ]
        },
        {
            "id": "/m/07_pf",
            "destination": {
                "city": "Venice",
                "country": "Italy",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXybzmSZQ2U8gyRpB-ICGxEpXs7OMkl6hUVhBzpsnZAcAQ1PFDaxtZoTh0WRmQJpK5j64a_FNmZ0HLYx3hkToP1KZEM6gynSyFLAJEKw",
                "distance": null
            },
            "date": {
                "start": "2023-09-22",
                "end": "2023-09-25"
            },
            "transport": [
                {
                    "price": 58,
                    "company": "Volotea",
                    "airport": "VCE"
                }
            ]
        },
        {
            "id": "/m/04jpl",
            "destination": {
                "city": "London",
                "country": "United Kingdom",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR9ojtKjiILCNbB-EEQloSQgf0ztJmvJqCEPJG2ZaV1mRpcm-IyFCJ6KiunnAuYyD0ah668bgM7zlmgzUjsRcEvefiOP-egq-zdFPy-eQ",
                "distance": "243 km"
            },
            "date": {
                "start": "2023-06-22",
                "end": "2023-06-25"
            },
            "transport": [
                {
                    "price": 98,
                    "company": "Eurostar",
                    "airport": "QQS"
                }
            ]
        },
        {
            "id": "/m/0n2z",
            "destination": {
                "city": "Athens",
                "country": "Greece",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQogyXj6m-TGp0s3FAMCqU7-77RCsQQ4FuuMVBLHVkalZqIn-qbF2WCSKc0yLLyqN4KkK2RpLUBGJnr6amiZ4_CzyIEOCyqghnkB8GdtQ",
                "distance": null
            },
            "date": {
                "start": "2023-09-28",
                "end": "2023-10-02"
            },
            "transport": [
                {
                    "price": 143,
                    "company": "Aegean",
                    "airport": "ATH"
                }
            ]
        },
        {
            "id": "/m/04w58",
            "destination": {
                "city": "Monaco",
                "country": "Monaco",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTSy_DVLwnPOSMqRyc2gCQ8HZamDaKFmmCOy8AIJKmiHk2Flk1phKyGy-_kD746toTKPRP7y2rPxZ2KxosNfMh6AwsXhUd5NYAtCugtnA",
                "distance": null
            },
            "date": {
                "start": "2023-10-12",
                "end": "2023-10-16"
            },
            "transport": [
                {
                    "price": 61,
                    "company": "easyJet",
                    "airport": "NCE"
                }
            ]
        },
        {
            "id": "/m/056_y",
            "destination": {
                "city": "Madrid",
                "country": "Spain",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiaNqWAE3IUqPuNUQrVgXskJXc71yyaquPJak6TnwikJRj-aoeySqD_fdKJ0S2GvCaY2imsxQV5I7Dav9boXFtPB8447h7NhsU-gJGng",
                "distance": null
            },
            "date": {
                "start": "2023-09-22",
                "end": "2023-09-25"
            },
            "transport": [
                {
                    "price": 321,
                    "company": "AccesRail and Air France",
                    "airport": "MAD"
                }
            ]
        },
        {
            "id": "/m/0156q",
            "destination": {
                "city": "Berlin",
                "country": "Germany",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTrFo-Rf52zx3hxicgyBFixzlpQTXfApzCDlg31BL6JXke1gp2U8rX2xF7cg6Hx98moJXttM16FATcpcFr3YILO0xaAzgM3YzeuecfK4A",
                "distance": null
            },
            "date": {
                "start": "2023-09-08",
                "end": "2023-09-11"
            },
            "transport": [
                {
                    "price": 325,
                    "company": "AccesRail and Air France",
                    "airport": "BER"
                }
            ]
        },
        {
            "id": "/m/070t9",
            "destination": {
                "city": "Santorini",
                "country": "Greece",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ6OQ143mXHrW6p0pePDsw5ZDLeuMzIppuzJOmbEhH2eXzzQZnyRdnBMYcnLY8jhWjUO4uNK22HVnMSiN7lQ2Enbg_R8lkH5Hnl_vqajQ",
                "distance": null
            },
            "date": {
                "start": "2023-08-31",
                "end": "2023-09-04"
            },
            "transport": [
                {
                    "price": 431,
                    "company": "Aegean",
                    "airport": "JTR"
                }
            ]
        },
        {
            "id": "/m/05ywg",
            "destination": {
                "city": "Prague",
                "country": "Czechia",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8F-KMG3jhweqYHaJbchm3x_-Gx8NF84JQHdBk9HQAzpeisls1bZqjhKSgfefZOv22KrJ-eQiSJteGAvHjEyzs--gNU6nMx_osYLlatw",
                "distance": null
            },
            "date": {
                "start": "2023-07-06",
                "end": "2023-07-09"
            },
            "transport": [
                {
                    "price": 220,
                    "company": "AccesRail and Air France",
                    "airport": "PRG"
                }
            ]
        },
        {
            "id": "/m/031y2",
            "destination": {
                "city": "Florence",
                "country": "Italy",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYl3u2KPEF9mn-698OBtX19WEDpT0ed1EhT12hey5VRkWMCYIvtZ_mlGmE_6Q_1CgyuxGRRGnfn9SHlntudL017v5tKQmt6AJr4pQvdA",
                "distance": null
            },
            "date": {
                "start": "2023-07-21",
                "end": "2023-07-24"
            },
            "transport": [
                {
                    "price": 221,
                    "company": "AccesRail and Air France",
                    "airport": "FLR"
                }
            ]
        },
        {
            "id": "/m/09949m",
            "destination": {
                "city": "İstanbul",
                "country": "Türkiye",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTCxBjNwAoLrTOKowDJwZyOgqpPqpGuPY1umCd0ey6x2mma7s1rFxR63gC-wiSQxRp8LzzpwbK_vjhTOg",
                "distance": null
            },
            "date": {
                "start": "2023-10-05",
                "end": "2023-10-09"
            },
            "transport": [
                {
                    "price": 312,
                    "company": "AccesRail and Air France",
                    "airport": "IST"
                }
            ]
        },
        {
            "id": "/m/0fhp9",
            "destination": {
                "city": "Vienna",
                "country": "Austria",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIYU8vv1VZzdDH4cPvyyiDbdjbZVjfqDSFUnzO9a32l4g4VUvRBsr1nFGZqxXgxiZgkBv6po68PMHh6NSIqNCqM8L4ZH7nHZEIQqxiA",
                "distance": null
            },
            "date": {
                "start": "2023-07-20",
                "end": "2023-07-23"
            },
            "transport": [
                {
                    "price": 463,
                    "company": "Aegean",
                    "airport": "VIE"
                }
            ]
        },
        {
            "id": "/m/095w_",
            "destination": {
                "city": "Budapest",
                "country": "Hungary",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcS0rV5HoLeOZjEbBvMmLiJHPXGQa80uh1ibFXtJRBjq-iD4A7YJwwlJzomhDntpHZm2IJXyhmDbsC77l74ABeUgbu2GuirxKkP1Pnq8XA",
                "distance": null
            },
            "date": {
                "start": "2023-09-15",
                "end": "2023-09-17"
            },
            "transport": [
                {
                    "price": 390,
                    "company": "AccesRail and Air France",
                    "airport": "BUD"
                }
            ]
        },
        {
            "id": "/m/02cft",
            "destination": {
                "city": "Dublin",
                "country": "Ireland",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQv0MeqLYIcCBFKHWTvpIP3eYABuDWIZkpzBtCaWoA2_oa7Xd6SBHzrHPtk9sNrihH6Wxq3pVHcgeLd0Spy_rQhTt-d1MsjteMLdbm82A",
                "distance": null
            },
            "date": {
                "start": "2023-08-31",
                "end": "2023-09-03"
            },
            "transport": [
                {
                    "price": 208,
                    "company": "AccesRail and Air France",
                    "airport": "DUB"
                }
            ]
        },
        {
            "id": "/m/0947l",
            "destination": {
                "city": "Milan",
                "country": "Italy",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSLJv3t_EuAFFBnBY-w2C-c9ceu7OiVJaqEp8G_NYf9u57k4sPpA3_NopX-vOApDaJs988YwlgRBDRwK16i_s2ch7_p70dyJB5z27DTNg",
                "distance": null
            },
            "date": {
                "start": "2023-06-29",
                "end": "2023-07-03"
            },
            "transport": [
                {
                    "price": 220,
                    "company": "AccesRail and Air France",
                    "airport": "MXP"
                }
            ]
        },
        {
            "id": "/m/0fbwq",
            "destination": {
                "city": "Dubrovnik",
                "country": "Croatia",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPngpnZYa7mJeXbr5mVem90Fvs9bvJ0IbBLT3MytW8sNGMO-KLYudnEvINd3drJvgyUaNkqgm8uynyshQy_g4pONh9fLZewJ8JgtVaDw",
                "distance": null
            },
            "date": {
                "start": "2023-07-14",
                "end": "2023-07-17"
            },
            "transport": [
                {
                    "price": 369,
                    "company": "AccesRail and Air France",
                    "airport": "DBV"
                }
            ]
        },
        {
            "id": "/m/02h6_6p",
            "destination": {
                "city": "Munich",
                "country": "Germany",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcS_6gtApFe2tOHhproeOzj1XVyhkFzg96JJsnC-RjAX7pMyNitfWlL6RELvi3k25802wTvN3Lioy44KcolaJemEEOcnstK-UpGifLdi_w",
                "distance": null
            },
            "date": {
                "start": "2023-07-06",
                "end": "2023-07-09"
            },
            "transport": [
                {
                    "price": 221,
                    "company": "AccesRail and Air France",
                    "airport": "MUC"
                }
            ]
        },
        {
            "id": "/m/02gtbh",
            "destination": {
                "city": "Mykonos",
                "country": "Greece",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQfJTKBNS1BnMT8zOTrD6UhswoPSIWsRZXqofG-kG2VwWHE8DrXrHsLY825-wpoqkwsRkXfirFF9zISQG7Uh46E758rSkkz_00b_2uhw",
                "distance": null
            },
            "date": {
                "start": "2023-06-22",
                "end": "2023-06-26"
            },
            "transport": [
                {
                    "price": 342,
                    "company": "Aegean",
                    "airport": "JMK"
                }
            ]
        },
        {
            "id": "/m/0pmn7",
            "destination": {
                "city": "Porto",
                "country": "Portugal",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRVJGYgm2p3tZ7Wqsm8Jrw6hnHiwvT9Ymhm4G0RcePvYqwWrjWCxW1CFko2Hv-oqa1-Mv-9UOFVRS3_FVx176rDUHgKRo_m3LYsmbyPIQ",
                "distance": null
            },
            "date": {
                "start": "2023-11-17",
                "end": "2023-11-20"
            },
            "transport": [
                {
                    "price": 111,
                    "company": "Ryanair",
                    "airport": "OPO"
                }
            ]
        },
        {
            "id": "/m/09f3c",
            "destination": {
                "city": "Seville",
                "country": "Spain",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8jpZgilUelUwc6D5N2sSpLtqC0yTCvDUiCbqZoGTQnShWM5IAApjyRp59PGEkIyqiHSeyVh8zCu-tekW-hPSRMF2ZpW-5jlFS9EdNLw",
                "distance": null
            },
            "date": {
                "start": "2023-06-22",
                "end": "2023-06-25"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/0fhsz",
            "destination": {
                "city": "Naples",
                "country": "Italy",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRtXaJ_QI3Tw4x6hpoyeqpz904lG4dRz6X8_Og5NurMitLGuD-7y3gaZDZ0upJ5v_kCKRHlYWCLQMQCBwR3P2JzznsJEyr4IzfuCVPyKA",
                "distance": null
            },
            "date": {
                "start": "2023-08-31",
                "end": "2023-09-04"
            },
            "transport": [
                {
                    "price": 231,
                    "company": "easyJet",
                    "airport": "NAP"
                }
            ]
        },
        {
            "id": "/m/08966",
            "destination": {
                "city": "Zürich",
                "country": "Switzerland",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQa8T7B_x1IiqSq46kDfePp_hqEcKKQPV6jVElPOOfhnSQRCSEBpLQJJUyIpMO_t3_fGaNeGKay7u8jLfB02lYM_KQ7rWmhHlsHPRNJiQ",
                "distance": "539 km"
            },
            "date": {
                "start": "2023-07-07",
                "end": "2023-07-10"
            },
            "transport": [
                {
                    "price": 265,
                    "company": "AccesRail and Air France",
                    "airport": "ZRH"
                }
            ]
        },
        {
            "id": "/m/052bw",
            "destination": {
                "city": "Manchester",
                "country": "United Kingdom",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSUyB-QI7_s3KKcMDZIMp7STSYjexpORme6EcVaJ6z2DXBvioPJPBMwxpz--zloc9rGtQPGoADwsG1w5inklog06vF4P4ezABhP8JyquQ",
                "distance": "481 km"
            },
            "date": {
                "start": "2023-07-01",
                "end": "2023-07-03"
            },
            "transport": [
                {
                    "price": 284,
                    "company": "AccesRail and Air France",
                    "airport": "MAN"
                }
            ]
        },
        {
            "id": "/m/0cltb",
            "destination": {
                "city": "Amalfi",
                "country": "Italy",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTEk3VcLTKElzkv6nzK3bciMXM8kjUxFM7HvTElcY-RFs4UhdAn5IYdDyykLGXl5Lzsti5xoHKlcUqeDhg3Qq6YMvYykw96kdOnXLCboA",
                "distance": null
            },
            "date": {
                "start": "2023-07-06",
                "end": "2023-07-09"
            },
            "transport": [
                {
                    "price": 71,
                    "company": "Volotea",
                    "airport": "FCO"
                }
            ]
        },
        {
            "id": "/m/05qtj",
            "destination": {
                "city": "Paris",
                "country": "France",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQqBkfxJKf4FPkN9wibVFEjWDzIwnWCbOSCc1PtKLTbh7iXUGcunx5lB_WSR6jCDup9b1zSVKaalqcHcytus1mpsDDWoFnnaYuLS7UR5A",
                "distance": "204 km"
            },
            "date": {
                "start": "2023-08-11",
                "end": "2023-08-13"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/0k3p",
            "destination": {
                "city": "Amsterdam",
                "country": "Netherlands",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSMEZk-V-NynohN3IlbvWriB5IPXbgdQkfVQpdYx_KNyFdAJvxEGaX3IMjWDRkcZxtPsc_UKC3wWCFqIlqFdA241K07dShbNeCRJ4Bgtw",
                "distance": "232 km"
            },
            "date": {
                "start": "2023-08-31",
                "end": "2023-09-04"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/02z0j",
            "destination": {
                "city": "Frankfurt",
                "country": "Germany",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSoO1N9Kqv7W1PWgpxrU4IB2bm8WCEKXFT_OuoN0hcJQ9jXfynIAlKNYxF2Q36Oq95eUML9gfe0G76t1N50Dn4lsSpyjwzkBWD9VxwU6g",
                "distance": "403 km"
            },
            "date": {
                "start": "2023-08-11",
                "end": "2023-08-13"
            },
            "transport": [
                {
                    "price": 455,
                    "company": "Air France",
                    "airport": "FRA"
                }
            ]
        },
        {
            "id": "/m/0b1mf",
            "destination": {
                "city": "Salzburg",
                "country": "Austria",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRB7jTFciRN_LmU3dnlBI9PmHKjcxvoryiGZCvBw62WrsKgRGqwCFVPOgwOs39l_K6hQyMZscO6aMPyO-SNsF8wF5y8oeKLiDQs3AUMjA",
                "distance": null
            },
            "date": {
                "start": "2023-07-06",
                "end": "2023-07-10"
            },
            "transport": [
                {
                    "price": 221,
                    "company": "AccesRail and Air France",
                    "airport": "MUC"
                }
            ]
        },
        {
            "id": "/m/0491y",
            "destination": {
                "city": "Kraków",
                "country": "Poland",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFJmpHfqhMHzYj8BESFpR9Z8gwMptit1U8EuYzbNOXDoQO486gP3A4D8hRWPGjIEAlMbzJLYH__RCEoXiW4EClduwwGVIsuzwMddWkcA",
                "distance": null
            },
            "date": {
                "start": "2023-09-01",
                "end": "2023-09-03"
            },
            "transport": [
                {
                    "price": 66,
                    "company": "Ryanair",
                    "airport": "KRK"
                }
            ]
        },
        {
            "id": "/m/036vk5",
            "destination": {
                "city": "Cinque Terre",
                "country": "Italy",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTdD5JGMF0Zf7Xf7qnPXi8jMl0UgrFnhTuAi2N_Hqd6Z3zhX93MNgP7HWHG3nZX2NoS0MIQ96Cvmh_YLds8bxzn1tBxCW-Rc7H7wTP6bw",
                "distance": null
            },
            "date": {
                "start": "2023-07-06",
                "end": "2023-07-10"
            },
            "transport": [
                {
                    "price": 395,
                    "company": "AccesRail, Air France, and ITA",
                    "airport": "GOA"
                }
            ]
        },
        {
            "id": "/m/03hrz",
            "destination": {
                "city": "Hamburg",
                "country": "Germany",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_xzXPEdEKSnZpgLW8sZWEKQ7kH_ztE4dmaKENLdd6l1GP_VNq5DscYlRirKP0NNKAP211ztAXSJeFB-8boyit8Fe-bs6MkQvHEHdllA",
                "distance": "574 km"
            },
            "date": {
                "start": "2023-06-29",
                "end": "2023-07-03"
            },
            "transport": [
                {
                    "price": 325,
                    "company": "AccesRail and Air France",
                    "airport": "HAM"
                }
            ]
        },
        {
            "id": "/m/04g61",
            "destination": {
                "city": "Luxembourg",
                "country": "Luxembourg",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRCNYwqA3DCo8osIWMA_GZCpeth7hU0ilYBDEcR_yAJfv0i1wY4Ntw72Blxns3cs5_AvDAZFcyMaE2M8824iRajMcxE-34WYdTfnc77Zg",
                "distance": "237 km"
            },
            "date": {
                "start": "2023-06-29",
                "end": "2023-07-03"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/0h3tv",
            "destination": {
                "city": "Valencia",
                "country": "Spain",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQgZ_gjHrXaC67LG5tkAwE946mpzdFkUnyCiUqMLnewZhycbIUUm2TZPbiEgv11qzCvh9HgiwQoUd7-mxqd_ljxY2Nvm0MZU7WGY38_Pg",
                "distance": null
            },
            "date": {
                "start": "2023-06-29",
                "end": "2023-07-03"
            },
            "transport": [
                {
                    "price": 265,
                    "company": "AccesRail and Air France",
                    "airport": "VLC"
                }
            ]
        },
        {
            "id": "/m/09jq0",
            "destination": {
                "city": "Granada",
                "country": "Spain",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYEO_F7A9Cppu2iF314xuyHZ3KGLtjMzYnX1pfKb9oaaYugedtI4nvgzrACcZD8DYGHFFQc8FEjYO3SiHFOd5Io6SuBatK0Dju0HjlTg",
                "distance": null
            },
            "date": {
                "start": "2023-07-06",
                "end": "2023-07-10"
            },
            "transport": [
                {
                    "price": 370,
                    "company": "AccesRail and Air France",
                    "airport": "AGP"
                }
            ]
        },
        {
            "id": "/m/0h2c3",
            "destination": {
                "city": "Ibiza",
                "country": "Spain",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQVWRTzpQ1kGmQ5sSxFDUoM8T67h-6Ut81qWNrcopj5LmkzYjlO6SIJzhkGZn-oe5fS0VwYjUAYOH9r3__poMIk0_IfrtYEHbtfYN_kEg",
                "distance": null
            },
            "date": {
                "start": "2023-07-28",
                "end": "2023-07-31"
            },
            "transport": [
                {
                    "price": 346,
                    "company": "easyJet",
                    "airport": "IBZ"
                }
            ]
        },
        {
            "id": "/m/078lk",
            "destination": {
                "city": "Sardinia",
                "country": "Italy",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTj3d7f6403uWReLh6BIduOtY1XoYuCjo5RItozQK4uViEO4cX5wHDz_bfFKcQy--un51SubFYfZXAkPhu6wUsWpGSBH7h3sbWeKeYx-A",
                "distance": null
            },
            "date": {
                "start": "2023-10-27",
                "end": "2023-10-29"
            },
            "transport": [
                {
                    "price": 192,
                    "company": "easyJet",
                    "airport": "OLB"
                }
            ]
        },
        {
            "id": "/m/01g_k3",
            "destination": {
                "city": "Split",
                "country": "Croatia",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRm_7HtSiZ4LfqO6Zrj90tLRnl8Cg7k7Uy2bHhUQFZ49n903YsvibliOs9cvotP03sZkU1V8hbsnx8LSfAWvrkciqO3ExDdo-LMjarmKw",
                "distance": null
            },
            "date": {
                "start": "2023-10-27",
                "end": "2023-10-29"
            },
            "transport": [
                {
                    "price": 164,
                    "company": "easyJet",
                    "airport": "SPU"
                }
            ]
        },
        {
            "id": "/m/0jdtt",
            "destination": {
                "city": "Marseille",
                "country": "France",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTQ9xCM45seAVeW_iXjskrz455DM6Sq50NBtHMleQf97iKfxNpjfTIiqpZcgJsIBUEJzdnhZzQW8GKHDk3PCGsGwSmsg8uIHS_gcRwQFg",
                "distance": null
            },
            "date": {
                "start": null,
                "end": null
            },
            "transport": []
        },
        {
            "id": "/m/081m_",
            "destination": {
                "city": "Warsaw",
                "country": "Poland",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMByFzTq7tTX3ScNBTx6O4X_PEDPacDz2SAZs4pGyfVxPLCGgjurQQoxYNIooC3iyp5jGzWHRQ-gTKuWtrJo56eNzXqTtu1T3T93zDhQ",
                "distance": null
            },
            "date": {
                "start": null,
                "end": null
            },
            "transport": []
        },
        {
            "id": "/m/03902",
            "destination": {
                "city": "Geneva",
                "country": "Switzerland",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT8KnZ49jzEb6Wgy6tvT1bGqHqL2jyHsAG9eQbGIiO2zIASEmyFNMDvUn7o0EuTD2EeSzufhbrv00y_CXmvW_71l-fxQyoz2yvCpLmJlA",
                "distance": "542 km"
            },
            "date": {
                "start": null,
                "end": null
            },
            "transport": []
        },
        {
            "id": "/m/03qzkz",
            "destination": {
                "city": "Saint-Tropez",
                "country": "France",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsXwcOg-DWZsAoBcKL8ZkX1Fjcau3hGQTgZJIHS3Fo4aDFJ6gUxBNJ7SAuGtGABpV6lKL-mHC98WKbzZHX-UH-zWsj9l-3-zdF83lR_g",
                "distance": null
            },
            "date": {
                "start": "2023-10-12",
                "end": "2023-10-16"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/0kpgn",
            "destination": {
                "city": "Cappadocia",
                "country": "Türkiye",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmmaUh3yo-MqMaWjl6e5-Rg0xMP_iMBD4p1E1W8FISftGR0oHVZ-ivMBDmCKJKgrq5qttLxrD92jZoCFJBGjNFuDEDQiFHj3Hw4d2IXQ",
                "distance": null
            },
            "date": {
                "start": "2023-06-22",
                "end": "2023-06-25"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/096gm",
            "destination": {
                "city": "Bucharest",
                "country": "Romania",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSLZsVSQvaRd2U8HwapnhcrcCxvi3M57w1a1ZcJCtrCBOTSMKts3lobnABAiFPVbR6wrJ9FrmKDpvS0j8f6tzIIo_om28sHQV7v2MyuHw",
                "distance": null
            },
            "date": {
                "start": "2023-07-06",
                "end": "2023-07-10"
            },
            "transport": [
                {
                    "price": 498,
                    "company": "AccesRail and Air France",
                    "airport": "OTP"
                }
            ]
        },
        {
            "id": "/m/09pxc",
            "destination": {
                "city": "Palermo",
                "country": "Italy",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTlqbgfxtP8xdbOzt1znySpczgRbRn56yKa-DlMbbFKt3RO2L1jnD8Oe9xp-A7GLFDRLle0aDPdYesE4O1j8r72KjjnAfvikk6ovoU3yg",
                "distance": null
            },
            "date": {
                "start": "2023-12-08",
                "end": "2023-12-10"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/02l6l8",
            "destination": {
                "city": "Donostia-San Sebastian",
                "country": "Spain",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTx22T0nhaBGqo6zMb3msYFYSUL1_LlFnHLDXLPD_4lKmXUSJ0rgGC6dqbsHSKm1SwIHHyu_gogh42D-zyKDnRG1mwMabrPyzrxxv5bCA",
                "distance": null
            },
            "date": {
                "start": null,
                "end": null
            },
            "transport": []
        },
        {
            "id": "/m/0jwz5",
            "destination": {
                "city": "Palma",
                "country": "Spain",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG7waSnNK8FMBocuLKKQXKfytT-rHtXXX5xhzYMymb0uuv1dy_YR0AVdHyXmAqycGBaYx7R4NgKm4oA3LhPiTRTx1VzkI6hScRQ3bIRQ",
                "distance": null
            },
            "date": {
                "start": null,
                "end": null
            },
            "transport": []
        },
        {
            "id": "/m/01_hhp",
            "destination": {
                "city": "Antalya",
                "country": "Türkiye",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnI3Japv2PHXdSYu-aAyQBgPZI8vyodwhqjEYQfDyFgJ1fcW9lUPbUQwZftahWvgLuTbhH_3th__01xgpJsx4xTZK3iuK-AMCx-eye5A",
                "distance": null
            },
            "date": {
                "start": "2023-07-27",
                "end": "2023-07-31"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/0m__z",
            "destination": {
                "city": "Galway",
                "country": "Ireland",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSXv2Ebt1KQcGQ1oo1HYWIr3ugKNCk6PmmXSp4Ig-EWhjprWajyRMDgPfa4yYsYyK4PGt6coS9Mx_7R0O73qR4Hp0kHEA5s3Tv90iLvgA",
                "distance": null
            },
            "date": {
                "start": "2023-07-06",
                "end": "2023-07-10"
            },
            "transport": [
                {
                    "price": 321,
                    "company": "AccesRail and Air France",
                    "airport": "DUB"
                }
            ]
        },
        {
            "id": "/m/0htqt",
            "destination": {
                "city": "Bilbao",
                "country": "Spain",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSv_MBj4uQ5EI2gsbcEsRRdSa69ZhwHU-_EEtfe3hbzc0FnbaSSSS05ZmrfV9f5Dl5Lr-SgsJrZBjq6GPIlQyBN8XhBM3Njvx94hUve-w",
                "distance": null
            },
            "date": {
                "start": null,
                "end": null
            },
            "transport": []
        },
        {
            "id": "/m/0ftjx",
            "destination": {
                "city": "Sofia",
                "country": "Bulgaria",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRlc5wsAc4iXeRDeqRP2bDiFr0aBuZ9sNFQnHVmVFz14vgNeysOBcEulia_IHpki9hMIEf_-jOP_TJgHJ4NJHsBfen75Y9oLeZGcnOAhw",
                "distance": null
            },
            "date": {
                "start": null,
                "end": null
            },
            "transport": []
        },
        {
            "id": "/m/0clz7",
            "destination": {
                "city": "Cork",
                "country": "Ireland",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTGtgfQ8FBAwpNpMyFaLuyiQBNuNq6PyAsr5mwuZWbpu8jaQLkrEOmT4MnpC8wq-WqDKIFFX9Tg1LRak2YU_PkVaSvmLcyGzPpnLsZoSg",
                "distance": null
            },
            "date": {
                "start": "2023-07-27",
                "end": "2023-07-31"
            },
            "transport": [
                {
                    "price": 321,
                    "company": "AccesRail and Air France",
                    "airport": "DUB"
                }
            ]
        },
        {
            "id": "/m/02sn34",
            "destination": {
                "city": "Kyiv",
                "country": "Ukraine",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRpP8pTBrZHm3FK-pI37akDfy9pQj85SFo6pFXueYrwQvSU2b5LOc9GTxhH8dABsQXSIkOWcqMF4qr32x97Lh-1n6FtiFw8W55O07aC1Q",
                "distance": null
            },
            "date": {
                "start": "2023-06-22",
                "end": "2023-06-25"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/06wr9",
            "destination": {
                "city": "Santiago de Compostela",
                "country": "Spain",
                "image": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQcfNsqfaOu1_1ieH1p-0GLkBwBqdeChT4DlJJMSrD1XefFLn6WfE6lgiUFvNLH9J6ryjvVFF8xiLxYEYmvEHd9qRckTMFp7vRgoXwmZw",
                "distance": null
            },
            "date": {
                "start": null,
                "end": null
            },
            "transport": []
        },
        {
            "id": "/m/03nbsl",
            "destination": {
                "city": "Pamukkale",
                "country": "Türkiye",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh3ZjyCcdcq1lPZoFXmwMx0kXBW738U3DceB0vaxakQkCPFO49lV8MvQpI7wFFqNsU7yWA8uwiSP8cm0TcNBEq9V1b148dZw0GuWTudw",
                "distance": null
            },
            "date": {
                "start": "2023-07-27",
                "end": "2023-07-31"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/029v4j",
            "destination": {
                "city": "Faro",
                "country": "Portugal",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjW-6WDhvlQyE5e1Vdx_9FVar-qu7qgMURqBBDBw7Sx9ef_MgUmf0cMjbFGM9ML_KIYzZBFkan4cDkRCYdbYlRzU6h6lzKgrH1NjXLYQ",
                "distance": null
            },
            "date": {
                "start": "2023-07-06",
                "end": "2023-07-10"
            },
            "transport": [
                {
                    "price": 66,
                    "company": "Volotea",
                    "airport": "FAO"
                }
            ]
        },
        {
            "id": "/m/0hjtg",
            "destination": {
                "city": "Brașov",
                "country": "Romania",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQhWg2hxitoYtur-TwNKfAkA4__aboloTkbvQesoxo9oc76EhXfsWNmEqo3AgS_FPjxC-6c0EqjhvBVK775zNVCiFrePr4Ug7_r-jJuAw",
                "distance": null
            },
            "date": {
                "start": "2023-07-06",
                "end": "2023-07-10"
            },
            "transport": [
                {
                    "price": 498,
                    "company": "AccesRail and Air France",
                    "airport": "OTP"
                }
            ]
        },
        {
            "id": "/m/01sptz",
            "destination": {
                "city": "Killarney",
                "country": "Ireland",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdJXi-Ls7kKh5a-6JUQYQgyeK4mSAvCejW8pzDgwpiHWyB62AkvBwUkE5kPI84D8mEUXr6pfzCyUUKLsb6l4-Hfb9oMkdA4lo4ZB2WNQ",
                "distance": null
            },
            "date": {
                "start": "2023-10-05",
                "end": "2023-10-08"
            },
            "transport": [
                {
                    "price": 208,
                    "company": "AccesRail and Air France",
                    "airport": "ORK"
                }
            ]
        },
        {
            "id": "/m/0c8lb",
            "destination": {
                "city": "Agrigento",
                "country": "Italy",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-NkZ8IyrM5EiM7UqsmQYGJ_OMu2sj7jGLWmCkt09zVSNkvFsdU5dtzOPd_-MRfjdrlGwOJpY1B_hGo1RBTI0Rk-SHAzH-jB-NFHRKjg",
                "distance": null
            },
            "date": {
                "start": "2023-12-08",
                "end": "2023-12-10"
            },
            "transport": [
                {
                    "price": 169,
                    "company": "easyJet",
                    "airport": "CTA"
                }
            ]
        },
        {
            "id": "/m/0dlxj",
            "destination": {
                "city": "Minsk",
                "country": "Belarus",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQgP0PJI10vAc1_O9B5qiUP1My_2etV-ihSP7QbdKYEMoRGNYzpPbieEqAiGly_2oBGdm1wkyHQh5b08t5dgSb2SYQgF9xCyAmxaTUd5Rk",
                "distance": null
            },
            "date": {
                "start": "2023-06-22",
                "end": "2023-06-25"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/0lxg6",
            "destination": {
                "city": "Varna",
                "country": "Bulgaria",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS9PW3as_bzGoNgG6ew1inKrXbKeqmHDjk5VD3g5fWEKYoHMY3FwezP_xRmLYQoHXd85DfeFrfIhhwYlUC1QYZ_FnuPhMysUqPrCAH7vw",
                "distance": null
            },
            "date": {
                "start": null,
                "end": null
            },
            "transport": []
        },
        {
            "id": "/m/02hvjy",
            "destination": {
                "city": "A Coruña",
                "country": "Spain",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRUk-Z3FVskYGmuj6bTMw9yHhNcLPznmqP95nNwUmAMLTfqhMFUTnj3JklyTYr2vnQsfzyKnnAXPqGKe6GKk6jiHNFbz3STqlerVROadA",
                "distance": null
            },
            "date": {
                "start": null,
                "end": null
            },
            "transport": []
        },
        {
            "id": "/m/026xgs",
            "destination": {
                "city": "Braga",
                "country": "Portugal",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Kh-9vuM1Xcz1YBAnbgwv24A7NeQL_oUAlJ-9kVwOpOeNo5q2MZ2eSPPBdedhrGnkVMP6DM5N8fz09JZzTJYH5JHaIVnMDXEHw3zFuA",
                "distance": null
            },
            "date": {
                "start": "2023-11-17",
                "end": "2023-11-20"
            },
            "transport": [
                {
                    "price": 111,
                    "company": "Ryanair",
                    "airport": "OPO"
                }
            ]
        },
        {
            "id": "/m/0ffmp",
            "destination": {
                "city": "Odesa",
                "country": "Ukraine",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQ2qnhmSAZTngA_B3Im4BbQC5J2_QBRdvmpvd2Dfkzevru9sbYa87doefhx0EZ13jLmtPouji6UGFgWKGdZT-zly5E6CC39hKQfscIuHQ",
                "distance": null
            },
            "date": {
                "start": "2023-06-22",
                "end": "2023-06-25"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/0fn77",
            "destination": {
                "city": "Chişinău",
                "country": "Moldova",
                "image": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSAyk7sNMBOXk0ijboxeNfN1mm-Crr6EYu_MiuHm5SKvT2cBidk5-7gAqAoTsEh0VznqmLtqqUIdfiRg_jiCUXcMF5-o-F9Gd7YEE86bQ",
                "distance": null
            },
            "date": {
                "start": "2023-06-22",
                "end": "2023-06-25"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/082sy9",
            "destination": {
                "city": "Kharkiv",
                "country": "Ukraine",
                "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWoO9jzjepe8gBt9cvzklev9nABqJzgBPhRkL48oWmgAiFAxr8FPp9YwZLU4odxtnIH_rjaDT3PZ2fyv82YJW38BirmZiUvtwr8on4dQ",
                "distance": null
            },
            "date": {
                "start": "2023-06-22",
                "end": "2023-06-25"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        },
        {
            "id": "/m/03x45p",
            "destination": {
                "city": "Dnipro",
                "country": "Ukraine",
                "image": "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTrwxSsEV6t7meaLpYIw-dS1CViKyr7rsU3dvbNLV8zojBJyFRYPe2xGO6SlFhLKAeNLoWCMCkfnejVkYV4hk9omGLR26pFPgCIvGKRRw",
                "distance": null
            },
            "date": {
                "start": "2023-06-22",
                "end": "2023-06-25"
            },
            "transport": [
                {
                    "price": null,
                    "company": "",
                    "airport": ""
                }
            ]
        }
    ])
    } catch (error) {
      console.error("Error fetching travels:", error);
    }
  };

  useEffect(() => {
    getTravels();
  }, []);

  return travels;
}

export default useTravels;
