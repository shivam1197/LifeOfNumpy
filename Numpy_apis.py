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

if __name__ == '__main__':
    app.run()
