﻿import React, { Component } from 'react'
import { Modal , Form, Input, Button } from 'antd'
import { postReplies } from '../actions/postReply'



class ReplyTextarea extends Component {
	
	handleButtonClick = () => {
		
		const { resetFields, validateFields } = this.props.form
		const { fetchArticle, accesstoken, dispatch, replyId, currentId } = this.props

		if(!accesstoken) {
			Modal.error({
				title: 'No authorization',
				content: (
				<p>还没有登录！@_@@_@</p>
				
				),
				onCancel() {
				/*  不设置会报错 说没有提供这个函数给， 底层的函数会报错 */
				}
			})
			return
		}
		
		
		validateFields((err, value) => {
			
			if(err || !value.content) return
			dispatch(postReplies(value, currentId, replyId, accesstoken ))
			/* **
			 * 再次请求 reply列表刷新 得到评论？
			*/
			resetFields()
			dispatch(fetchArticle(currentId))
			
		}) 
	}
	
	
	
	render() {
		const { replyName } = this.props
		const { getFieldDecorator } = this.props.form
		 const initialValue=replyName 
		 ? `@${replyName} `
		: ''
		
		
		return(
		  <Form > 
				<Form.Item 
					wrapperCol={{span:10, offset: 1}}>
					{getFieldDecorator('content',{
						initialValue: initialValue
					})(
						<Input 
						  rows={5} 
							type='textarea' />
					
					)}
				</Form.Item>	
				<Form.Item
					wrapperCol={{offset: 1}}
					>
					<Button 
						type='primary'
						onClick={this.handleButtonClick}>
						reply
				 </Button>
				</Form.Item>
		 </Form>
		)
	}

}
export  default Form.create()(ReplyTextarea)