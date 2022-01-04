import './upload.scss'
function UploadPage(){
    return(
        <div id="upload" className="innerCon">
            <h2>상품등록하기</h2>
            <form>
                <table>
                    <tr>
                        <td>상품사진</td>
                        <td><input type="file" name="img" /></td>
                    </tr>
                    <tr>
                        <td>상품명</td>
                        <td><input type="text" name="productname" /></td>
                    </tr>
                    <tr>
                        <td>판매자명</td>
                        <td><input type="text" name="sellername" /></td>
                    </tr>
                    <tr>
                        <td>상품가격</td>
                        <td><input type="text" name="price" /></td>
                    </tr>
                    <tr>
                        <td>상품소개</td>
                        <td>
                            <textarea>

                            </textarea>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2">
                            <button type="submit">등록</button>
                            <button type="reset">삭제</button>
                        </td>
                    </tr>
                </table>
            </form>
        </div>
    );
}
export default UploadPage;