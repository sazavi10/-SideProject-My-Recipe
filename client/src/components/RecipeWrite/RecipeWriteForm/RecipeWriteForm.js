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

  handleImageInput = (index)  => (e) => {
    e.preventDefault();
    const { onChangeImageInput, handleFileChange } = this.props;
    const file =  e.target.files[0];
    const fileValue = e.target.value;
    const fileName = e.target.name;
    let reader = new FileReader();
    reader.onloadend = () => {
      const filePreview = reader.result
      onChangeImageInput({ file, fileValue, filePreview, index })
    };
    reader.readAsDataURL(file);
    handleFileChange(fileName, file)
  }
        
  render(){
    const { addMultiInput, deleteMultiInput, handleSubmit, recipeCoverImage, recipeTitle, recipeDescription, 
            ingredientList, recipeBody, cookingTip, category, uploadImgArray, loading } = this.props;
    const { handleChange, handleMultiChange, handleImageInput } = this;

    const categoryList = category.map(
      (category, i) => {
          const { cateTitle, cateArray, cateName } = category.toJS();
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
            <div className={cx('image_upload')} style={uploadImgArray.get(i+1).get('filePreview') !=='' ? {backgroundImage:`url('${uploadImgArray.get(i+1).get('filePreview')}')`} : {}}>
              <div style={uploadImgArray.get(i+1).get('filePreview') !=='' ? {display: 'none'} : {}}>
                <i className='fas fa-camera'></i>
                <p>Step {i+1} 조리사진 업로드</p>
              </div>
              <input type='file' name={`recipeBody${i}`}
              value={ uploadImgArray.get(i+1).get('fileName') } 
              onChange={handleImageInput(i+1)} />
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
    return (
      <div className={cx('recipe_write_form')}>
        <div className={cx('loading', loading===true?'show':'')}>
            <div>
              <svg width="60px" height="60px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="lds-pacman" style={{background: 'none'}}><g ng-attr-style="display:{{config.showBean}}" style={{display:'block'}}><circle cx="68.8234" cy="50" r="4" ng-attr-fill="{{config.c2}}" fill="#cfd7ff"><animate attributeName="cx" calcMode="linear" values="95;35" keyTimes="0;1" dur="1" begin="-0.67s" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="1" begin="-0.67s" repeatCount="indefinite"></animate></circle><circle cx="89.2234" cy="50" r="4" ng-attr-fill="{{config.c2}}" fill="#cfd7ff"><animate attributeName="cx" calcMode="linear" values="95;35" keyTimes="0;1" dur="1" begin="-0.33s" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="1" begin="-0.33s" repeatCount="indefinite"></animate></circle><circle cx="49.0234" cy="50" r="4" ng-attr-fill="{{config.c2}}" fill="#cfd7ff"><animate attributeName="cx" calcMode="linear" values="95;35" keyTimes="0;1" dur="1" begin="0s" repeatCount="indefinite"></animate><animate attributeName="fill-opacity" calcMode="linear" values="0;1;1" keyTimes="0;0.2;1" dur="1" begin="0s" repeatCount="indefinite"></animate></circle></g><g ng-attr-transform="translate({{config.showBeanOffset}} 0)" transform="translate(-15 0)"><path d="M50 50L20 50A30 30 0 0 0 80 50Z" ng-attr-fill="{{config.c1}}" fill="#748cfa" transform="rotate(21.0352 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;45 50 50;0 50 50" keyTimes="0;0.5;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path><path d="M50 50L20 50A30 30 0 0 1 80 50Z" ng-attr-fill="{{config.c1}}" fill="#748cfa" transform="rotate(-21.0352 50 50)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 50;-45 50 50;0 50 50" keyTimes="0;0.5;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path></g></svg>
              <p>
                레시피를 등록중입니다.<br/>
                이 페이지를 닫거나 새로고침 하지 마세요!
              </p>
              </div>
        </div>
        <div className={cx('image_upload')} style={uploadImgArray.get(0).get('filePreview') !=='' ? {backgroundImage:`url('${uploadImgArray.get(0).get('filePreview')}')`} : {}}>
          <div style={uploadImgArray.get(0).get('filePreview') !=='' ? {display: 'none'} : {}}>
            <i className='fas fa-camera'></i>
            <p>커버 이미지 업로드</p>
          </div>
          <input type='file' name='recipeCoverImage' file={uploadImgArray.get(0).get('file')} value={uploadImgArray.get(0).get('fileName')} onChange={handleImageInput(0)}/>
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
        <footer className={cx('write_footer ')}><button onClick={handleSubmit}>발행하기</button></footer>
    </div>
    )
  }
}

export default RecipeWriteForm;