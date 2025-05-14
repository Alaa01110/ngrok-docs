import BrowserOnly from "@docusaurus/BrowserOnly";
import { cx } from "@ngrok/mantle/cx";
import type { ComponentProps } from "react";
import DocsCodeBlock, { CodeBlockFallback } from "../../components/code-block";

type Props = ComponentProps<typeof DocsCodeBlock>;

export default function CodeBlock({ className, ...props }: Props) {
	return (
		<BrowserOnly
			fallback={
				<CodeBlockFallback className="mb-4">Loading…</CodeBlockFallback>
			}
		>
			{() => <DocsCodeBlock className={className} {...props} />}
		</BrowserOnly>
	);
}
