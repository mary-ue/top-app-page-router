import { Button, Htag, P } from "../components";

export default function Home(): JSX.Element {
	
	return (
		<div>
			<Htag tag='h1'>Текст</Htag>
			<Button appearance="primary" arrow="right">Button</Button>
			<Button appearance="ghost" arrow="down">Button</Button>
			<P size='l'>Большой</P>
			<P>Средний</P>
			<P size='s'>Маленький</P>
		</div>
	);
}