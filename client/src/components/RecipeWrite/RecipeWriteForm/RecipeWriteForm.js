import React, { Component } from 'react';
import styles from './RecipeWriteForm.scss';
import classNames from 'classnames/bind';
import Button from 'components/common/Button';
import InigredientItem from '../IngredienItem'

const cx = classNames.bind(styles);

class RecipeWriteForm extends Component {

  handleChange = (e) => {
    const { onChangeInput } = this.props;
    const { value, name } = e.target;
    onChangeInput({ name, value });
  }

  handleMultiChange = (index, targetName) => (e) => {
    const { changeMultiInput } = this.props;
    const { value, name } = e.target;
    changeMultiInput({ name, value, index, targetName });
  }

<<<<<<< HEAD
  render(){
    const { addMultiInput, deleteMultiInput, recipeCoverImage, recipeTitle, recipeDescription, ingredientList, recipeBody, cookingTip, category } = this.props;
    const { handleChange, handleMultiChange } = this;
    const categoryList = category.map(
      (category, i) => {
          const { cateTitle, cateArray, cateName} = category.toJS();
=======
  handleImageInput = (index)  => (e) => {
    e.preventDefault();
    const { onChangeImageInput, handleFileChange } = this.props;
    const fileName = e.target.value;
    const { files } = e.target;
    const file =  window.URL.createObjectURL(files[0]);
    handleFileChange(e.target.name, e.target.files[0])
    onChangeImageInput({ file, fileName, index })
  }
        
  render(){
    const { addMultiInput, deleteMultiInput, handleSubmit, recipeCoverImage, recipeTitle, recipeDescription, 
            ingredientList, recipeBody, cookingTip, category, uploadImgArray } = this.props;
    const { handleChange, handleMultiChange, handleImageInput } = this;
    const categoryList = category.map(
      (category, i) => {
          const { cateTitle, cateArray, cateName } = category.toJS();
>>>>>>> Server&Db set end! write&view end - img upload ing
          return(
          <InigredientItem
              key={i}
              cateTitle={cateTitle}
              data={cateArray}
              cateName={cateName}
              handleChange={handleChange}
          />
        )
      }
    );
    const ingredientInput = ingredientList.map(
      (list, i) => {
        const targetName = 'ingredientList'
        return (
          <li key={i}>
            <input type='text' name='ingredient' value={ ingredientList.get(i).get('ingredient') } 
              placeholder='예)소고기' onChange={handleMultiChange(i, targetName)} />
            <input type='text' name='detail' value={ ingredientList.get(i).get('detail') } 
              placeholder='예)45g' onChange={handleMultiChange(i, targetName)}/>
            {ingredientList.size !==1?
            <button onClick={() => deleteMultiInput({index: i, targetName :targetName})}>
               <i className='fas fa-minus-circle'/>
            </button>
             : ''}
          </li>
        )
      }
    )

    const cookingStep = recipeBody.map(
      (list, i) => {
        const targetName = 'recipeBody'
        return(
          <div className={cx('cs_box')} key={i}>
          <h3>Step {i+1}</h3>
            <div className={cx('image_upload')}>
              <div>
                <i className='fas fa-camera'></i>
                <p>Step {i+1} 조리사진 업로드</p>
              </div>
<<<<<<< HEAD
              <input type='file' name='image' 
              value={ recipeBody.get(i).get('ingredient') } 
              onChange={handleMultiChange(i, targetName)} />
=======
              <input type='file' name={`recipeBody${i}`}
              value={ uploadImgArray.get(i+1).get('fileName') } 
              onChange={handleImageInput(i+1)} />
>>>>>>> Server&Db set end! write&view end - img upload ing
            </div>
            <div>
              <textarea placeholder='레시피를 간단히 설명해주세요!' name='text' 
              value={ recipeBody.get(i).get('ingredient') } 
              onChange={handleMultiChange(i, targetName)} />
            {recipeBody.size !==1?
              <button onClick={() => deleteMultiInput({index: i, targetName :targetName})}>
                삭제  <i className='fas fa-minus-circle'/>
              </button>
             : ''}
            </div>
          </div>
        )
      }
    )
<<<<<<< HEAD

=======
>>>>>>> Server&Db set end! write&view end - img upload ing
    return (
      <div className={cx('recipe_write_form')}>
        <div className={cx('image_upload')} style={recipeCoverImage !=='' ? {backgroundImage:`url('${recipeCoverImage}')`} : {}}>
          <div>
            <i className='fas fa-camera'></i>
            <p>커버 이미지 업로드</p>
          </div>
<<<<<<< HEAD
          <input type='file' name='recipeCoverImage'  value={recipeCoverImage} onChange={handleChange}/>
=======
          <input type='file' name='recipeCoverImage' file={uploadImgArray.get(0).get('file')} value={uploadImgArray.get(0).get('fileName')} onChange={handleImageInput(0)}/>
>>>>>>> Server&Db set end! write&view end - img upload ing
        </div>
        <div className={cx('title')}>
          <input type='text' name='recipeTitle' placeholder='제목을 입력해주세요' onChange={handleChange} value={recipeTitle}/>
        </div>
        <div className={cx('description')}>
          <h2>레시피소개</h2>
          <textarea placeholder='레시피를 간단히 설명해주세요!' name='recipeDescription' onChange={handleChange} value={recipeDescription}/>
        </div>
        <div className={cx('ingredient_list')}>
          <h2>재료</h2>
          <p className={cx('alert')}><i className='fas fa-info-circle'/> 재료를 정확히 입력해주세요 + 를 클릭하시면 입력 가능 항목이 추가 됩니다.</p>
          <ul>
           {ingredientInput}
          </ul>
          <div className={cx('add_ing')}><button onClick={() => addMultiInput('ingredientList')}>재료 추가하기<i className='fas fa-plus-circle'/></button></div>
        </div>
        <div className={cx('cateSelect checks')}>
          <h2>카테고리&amp; 요리정보</h2>
          <p className={cx('alert')}><i className='fas fa-info-circle'/> 분류를 바르게 설정해주시면, 이용자들이 쉽게 레시피를 검색할 수 있어요</p>
          {categoryList}
        </div>
        <div className={cx('cooking_step')}>
          <h2>요리순서</h2>
          <p className={cx('alert')}><i className='fas fa-info-circle'/> 요리과정을 순서대로 입력해주세요~</p>
          {cookingStep}      
          <Button size='big' onClick={() => addMultiInput('recipeBody')}>순서 추가하기 <i className='fas fa-plus-circle'/></Button>
        </div>
        <div className={cx('cooking_tip')}>
          <h2>요리팁</h2>
          <textarea placeholder='내용을 입력해 주세요' name='cookingTip' onChange={handleChange} value={cookingTip}/>
        </div>
<<<<<<< HEAD
=======
        <footer className={cx('write_footer ')}><button onClick={handleSubmit}>발행하기</button></footer>
>>>>>>> Server&Db set end! write&view end - img upload ing
    </div>
    )
  }
}

export default RecipeWriteForm;