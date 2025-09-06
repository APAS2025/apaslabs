import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'satoshi': ['Satoshi', 'Inter', 'sans-serif'],
				'space': ['Space Grotesk', 'Inter', 'sans-serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: {
					DEFAULT: 'hsl(var(--background))',
					deep: 'hsl(var(--background-deep))'
				},
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					glow: 'hsl(var(--primary-glow))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					glow: 'hsl(var(--secondary-glow))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					glow: 'hsl(var(--accent-glow))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				glass: {
					DEFAULT: 'hsl(var(--glass))',
					border: 'hsl(var(--glass-border))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-glow': 'var(--gradient-glow)',
				'gradient-glass': 'var(--gradient-glass)',
			},
			boxShadow: {
				'glow': 'var(--shadow-glow)',
				'glass': 'var(--shadow-glass)',
				'elevation': 'var(--shadow-elevation)',
			},
			transitionTimingFunction: {
				'smooth': 'var(--transition-smooth)',
				'bounce': 'var(--transition-bounce)',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(20px)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0)' 
					}
				},
				'fade-in-scale': {
					'0%': { 
						opacity: '0', 
						transform: 'translateY(20px) scale(0.95)' 
					},
					'100%': { 
						opacity: '1', 
						transform: 'translateY(0) scale(1)' 
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'shimmer': {
					'0%': { backgroundPosition: '-200% 0' },
					'100%': { backgroundPosition: '200% 0' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' },
					'50%': { boxShadow: '0 0 40px hsl(var(--primary) / 0.6)' }
				},
				'talk-mouth': {
					'0%, 100%': { 
						transform: 'scaleY(0.3) scaleX(1)',
						opacity: '0.8'
					},
					'25%': { 
						transform: 'scaleY(1) scaleX(0.8)',
						opacity: '1'
					},
					'50%': { 
						transform: 'scaleY(0.6) scaleX(1.1)',
						opacity: '0.9'
					},
					'75%': { 
						transform: 'scaleY(1.2) scaleX(0.7)',
						opacity: '1'
					}
				},
				'talk-upper-lip': {
					'0%, 100%': { 
						transform: 'translateX(-50%) translateY(0px) scaleY(1)',
					},
					'50%': { 
						transform: 'translateX(-50%) translateY(-1px) scaleY(0.8)',
					}
				},
				'talk-lower-lip': {
					'0%, 100%': { 
						transform: 'translateX(-50%) translateY(0px) scaleY(1)',
					},
					'50%': { 
						transform: 'translateX(-50%) translateY(1px) scaleY(0.8)',
					}
				},
				'speech-bubble-1': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(0px) scale(0.5)'
					},
					'30%': { 
						opacity: '0.8',
						transform: 'translateY(-5px) scale(1)'
					},
					'70%': { 
						opacity: '0.4',
						transform: 'translateY(-10px) scale(0.8)'
					},
					'100%': { 
						opacity: '0',
						transform: 'translateY(-15px) scale(0.3)'
					}
				},
				'speech-bubble-2': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(0px) scale(0.5)'
					},
					'40%': { 
						opacity: '0.6',
						transform: 'translateY(-3px) scale(1)'
					},
					'80%': { 
						opacity: '0.3',
						transform: 'translateY(-8px) scale(0.7)'
					},
					'100%': { 
						opacity: '0',
						transform: 'translateY(-12px) scale(0.2)'
					}
				},
				'speech-bubble-3': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(0px) scale(0.5)'
					},
					'50%': { 
						opacity: '0.4',
						transform: 'translateY(-2px) scale(1)'
					},
					'100%': { 
						opacity: '0',
						transform: 'translateY(-6px) scale(0.5)'
					}
				},
				'talk-wave-1': {
					'0%, 100%': { height: '1.5rem', opacity: '0.6' },
					'50%': { height: '2rem', opacity: '1' }
				},
				'talk-wave-2': {
					'0%, 100%': { height: '1rem', opacity: '0.7' },
					'50%': { height: '1.75rem', opacity: '1' }
				},
				'talk-wave-3': {
					'0%, 100%': { height: '2rem', opacity: '0.8' },
					'50%': { height: '2.5rem', opacity: '1' }
				},
				'talk-wave-4': {
					'0%, 100%': { height: '1.25rem', opacity: '0.6' },
					'50%': { height: '2rem', opacity: '1' }
				},
				'talk-wave-5': {
					'0%, 100%': { height: '1.5rem', opacity: '0.7' },
					'50%': { height: '1.75rem', opacity: '1' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out forwards',
				'fade-in-scale': 'fade-in-scale 0.6s ease-out forwards',
				'float': 'float 3s ease-in-out infinite',
				'shimmer': 'shimmer 2s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'talk-mouth': 'talk-mouth 1.2s ease-in-out infinite',
				'talk-upper-lip': 'talk-upper-lip 0.8s ease-in-out infinite',
				'talk-lower-lip': 'talk-lower-lip 0.8s ease-in-out infinite 0.1s',
				'speech-bubble-1': 'speech-bubble-1 2s ease-out infinite',
				'speech-bubble-2': 'speech-bubble-2 2.5s ease-out infinite 0.3s',
				'speech-bubble-3': 'speech-bubble-3 3s ease-out infinite 0.6s',
				'talk-wave-1': 'talk-wave-1 0.6s ease-in-out infinite',
				'talk-wave-2': 'talk-wave-2 0.8s ease-in-out infinite 0.1s',
				'talk-wave-3': 'talk-wave-3 0.7s ease-in-out infinite 0.2s',
				'talk-wave-4': 'talk-wave-4 0.9s ease-in-out infinite 0.3s',
				'talk-wave-5': 'talk-wave-5 0.6s ease-in-out infinite 0.4s'
			},
			animationDelay: {
				'200': '200ms',
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
				'1000': '1000ms',
				'1200': '1200ms',
				'1500': '1500ms',
				'2000': '2000ms',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
