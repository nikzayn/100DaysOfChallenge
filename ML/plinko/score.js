const outputs = [];
const k = 3;

//Score Update
function onScoreUpdate(dropPosition, bounciness, size, bucketLabel) {
  outputs.push([dropPosition, bounciness, size, bucketLabel]);
}


//Analysis
function runAnalysis() {
  const [testSet, trainingSet] = splitDataSet(outputs, 10);
}

//Applying knn algorithm
function knn(data, point){
    return _.chain(data)
    .map(row => [distance(row[0], point), row[3]])
    .sortBy(row => row[0])
    .slice(0, k)
    .countBy(row => row[1])
    .toPairs()
    .sortBy(row => row[1])
    .last()
    .first()
    .parseInt()
    .value();
}

//Getting the distance of position
function distance(pointA, pointB){
  return Math.abs(pointA - pointB);
}

//Splitting the data into single values
function splitDataSet(data, testCount){
  const shuffledData = _.shuffle(data);

  const testSet = _.slice(shuffledData, 0 , testCount);
  const trainingSet = _.slice(shuffledData, testCount);

  return [testSet, trainingSet];
}
