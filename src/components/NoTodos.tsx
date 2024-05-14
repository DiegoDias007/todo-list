import styled from "styled-components";
import Clipboard from "./Clipboard";

const StyledNoTodos = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	border-top: 1px solid #333333;
	border-radius: 8px;
	gap: 24px;
	padding: 64px 24px;
	width: 100%;
	min-height: 300px;
`;

const Text = styled.label<{ weight: number }>`
	color: #808080;
	font-size: 16px;
	font-weight: ${(props) => props.weight};
`;

const Box = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

function NoTodos() {
	return (
		<StyledNoTodos>
			<Clipboard />
			<Box>
				<Text weight={700}>Você ainda não tem tarefas cadastradas</Text>
				<Text weight={400}>Crie tarefas e organize seus itens a fazer</Text>
			</Box>
		</StyledNoTodos>
	);
}

export default NoTodos;
