export const getCvAsset = (language) => {
  if (language === 'en') {
    return {
      url: '/assets/ProfileCV_eng.pdf',
      fileName: 'Demófilo_Vizuete_CV_ENG.pdf'
    };
  }

  return {
    url: '/assets/ProfileCV_es.pdf',
    fileName: 'Demófilo_Vizuete_CV_ES.pdf'
  };
};
