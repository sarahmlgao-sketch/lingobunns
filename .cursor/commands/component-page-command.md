# component-page-command

# Cursor Project Command: Component Documentation

## Purpose
Guide the agent in writing documentation for individual components used in the project.

Components may include UI elements, interaction logic, audio features, or language-learning flows related to the stuffed animal experience.

## Required Sections (Strict)

Every component documentation page **must include all sections below, in this order**:

1. Overview  
2. Variants  
3. Usage Guidelines (Developers)  
4. Usage Guidelines (Designers)  
5. Accessibility Considerations  
6. Spacing  
7. Usage Examples  
8. Copyable Code Examples  

Do not omit or rename sections.

## Section Guidelines

### Overview
- Briefly explain what the component does
- Describe when and why it should be used
- Keep it beginner-friendly

### Variants
- List all supported variants or states
- Explain differences clearly
- If no variants exist, explicitly state this

### Usage Guidelines (Developers)
- When to use vs not use the component
- Important props, parameters, or constraints
- Performance or integration notes if relevant

### Usage Guidelines (Designers)
- Visual intent and design rationale
- Consistency rules
- Common misuse to avoid

### Accessibility Considerations
- Address real usage scenarios (e.g. children, audio feedback, visual cues)
- Include keyboard, screen reader, and contrast considerations when applicable
- Do not include generic accessibility filler text

### Spacing
- Define spacing rules clearly
- Use concrete values if available
- Explain how spacing affects usability

### Usage Examples
- Provide realistic examples tied to the product
- Prefer examples involving language learning interactions

### Copyable Code Examples
- Code must be complete and runnable
- Avoid pseudocode
- Keep examples minimal but practical

## Tone & Style

- Clear, friendly, and instructional
- Avoid academic or overly formal language
- Optimize for speed of understanding (hackathon judges + teammates)

## Constraints

- Do not reference internal tools or AI behavior
- Do not assume undocumented features
- Keep documentation aligned with the actual component behavior

## Outcome

When following this command, the agent should produce:
- Consistent, repeatable component documentation
- Developer- and designer-friendly explanations
- Copy-paste-ready code examples

