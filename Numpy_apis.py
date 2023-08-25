from flask import Flask,request,jsonify
from flask_cors import CORS
import numpy as np
app = Flask(__name__)
CORS(app)

@app.route('/api/version')
def version_check():
    data = {'example':'print(np.__version__)'}
    return jsonify(data)

@app.route('/api/numpyArray')
def numpyArray():
    data = {'example_list':'arr = np.array([1, 2, 3, 4, 5])',
            'example_tup':'arr = np.array((1, 2, 3, 4, 5))'}
    return jsonify(data)

@app.route('/api/0Darray')
def zero_Darray():
    data = {'example':'arr = np.array(42)'}
    return(data)

@app.route('/api/twoDArray')
def twoDimArray():
    data={'example':"""arr=np.array([[1.,  2.], [3.,  4.] ,[5.,6]])""",}
    return jsonify(data)

@app.route('/api/threeDarray')
def threeDimArray():
    data={
        'example':'arr = np.array([[[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4, 5, 6]]])'}
    return jsonify(data)

@app.route('/api/checkDimArray')    
def checkDimArray():
    data={"example":'arr.ndim','return value':"number of dimensions"}
    return jsonify(data)

@app.route('/api/HigherDim')
def higherDimensionalArrays():
    arr = np.array([1,2,3,4,5],ndmin=5)
    data={'example':'arr = np.array([1, 2, 3, 4], ndmin=5)','actual':f'{arr}','dim':f'{arr.ndim}'}
    return jsonify(data)

@app.route('/api/AccessArray')
def AccessArray():
    arr = np.array([1,2,3,4])
    data = {'example':'arr = np.array([1, 2, 3, 4])','actual':f'arr[0]{arr[0]}'}
    return jsonify(data)

@app.route('/api/Access2DArray')
def Access2DArray():
    arr = np.array([[1,2,3,4],[2,3,4,5]])
    data = {'example': 'arr = np.array([[1,2,3,4,5], [6,7,8,9,10]])','actual':f'arr[0, 1]{arr[0, 1]}'}
    return jsonify(data)

@app.route('/api/Access3DArray')
def Access3DArray():
    arr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])
    data = {'example': 'arr = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]])','actual':f'arr[0, 1, 2]{arr[0, 1, 2]}'}
    return jsonify(data)

@app.route('/api/NegativeIndexing')
def ArrayNegativeIndexing():
    arr = np.array([[1,2,3,4,5], [6,7,8,9,10]])
    data = {'example': 'arr = np.array([[1,2,3,4,5], [6,7,8,9,10]])','actual':f'arr[1, -1]{arr[1, -1]}'}
    return jsonify(data)

if __name__ == '__main__':
    app.run()
