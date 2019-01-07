<template>
	<div class="bottom_bar">
		<p class="top_p">猜你喜欢</p>
		<div class="pic_bar">
			<router-link class="route" to="../../../classify">
			<div>
				<img src="../../../assets/结账_slices-2/new_page_1@2x.png" alt="" />
				<p>这是一道美味佳肴</p>
				<i>售价：</i><span>$50000</span>
			</div>
			<div>
				<img src="../../../assets/结账_slices-2/new_page_1@2x.png" alt="" />
				<p>这也是一道美味佳肴</p>
				<i>售价：</i><span>$50000</span>
			</div>
			</router-link>
		</div>
		
	</div>
</template>

<script>
</script>

<style>
	.bottom_bar{
		width:100%;
		height:100%;
		position: relative;
		bottom:-1.4rem;
		border-bottom: 1px solid black;
		padding-bottom: 1rem;
	} 
	.bottom_bar .top_p{
		font-size: .48rem;
		margin-bottom: .6rem;
		margin-left: 2.5rem;
	}
	.bottom_bar .route{
		display: flex;
	    justify-content: space-around;
	    flex-direction: row;
    }
    .bottom_bar .route>div>p{
    	margin-top: 5px;
    	color: red;
    	font-size: .3rem;
    }
       .bottom_bar .route>div>i{
       	margin-top: 5px;
    	color: red;
    	font-size: .3rem;
       }
     .bottom_bar .route>div>span{
     	margin-top: 5px;
    	color: yellow;
    	font-size: .3rem;
     }
</style>