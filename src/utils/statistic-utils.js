//DO NOT TOUCH THIS MONSTROSITY

function languageSorter(countryData) {
  //Getting all languages as destructured [English,Arabic,English,Turkish,German......]
  const languagesDestructured = countryData.reduce(
    (prevArr, { languages }) => [
      ...prevArr,
      ...languages.map((lang) => lang.name),
    ],
    []
  );

  //Counting languages inside destructured language array using Map
  //Create new Map() then check if current language exist in the Map while iterating over  destructured array of languages.
  //I'm using map here just for iteration.
  const countedLanguages = languagesDestructured.reduce(
    (prevMap, currentLang) => {
      prevMap.set(currentLang, (prevMap.get(currentLang) || 0) + 1);
      return prevMap;
    },
    new Map()
  );

  //Sort given Map descending order then convert into array of language objects
  const sortedLanguages = [...countedLanguages.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .reduce((prevLangArr, currentLangArr) => {
      return [
        ...prevLangArr,
        { name: currentLangArr[0], languages: currentLangArr[1] },
      ];
    }, []);

  return sortedLanguages;
}

function statPropertySorter(countryData, sortProperty) {
  //Sort object array with given property and get first 10;
  const topSortedCountryData = countryData
    .sort((a, b) => b[sortProperty] - a[sortProperty])
    .slice(0, 10)
    .map((country) => ({
      name: country.name,
      [sortProperty]: country[sortProperty],
    }));

  return topSortedCountryData;
}

export { languageSorter, statPropertySorter };
