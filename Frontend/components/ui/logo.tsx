import React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'icon' | 'text';
  useInitials?: boolean; // new toggle
}

const Logo: React.FC<LogoProps> = ({ 
  className, 
  size = 'md', 
  variant = 'full',
  useInitials = false // default: show image
}) => {
  const sizeClasses = {
    sm: 'h-6 w-6',
    md: 'h-8 w-8', 
    lg: 'h-12 w-12',
    xl: 'h-16 w-16'
  };

  const textSizeClasses = {
    sm: 'text-sm',
    md: 'text-lg',
    lg: 'text-2xl', 
    xl: 'text-4xl'
  };

  if (variant === 'icon') {
    return (
      <div className={cn('flex items-center justify-center', className)}>
        {useInitials ? (
          <div
            className={cn(
              'flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 rounded-lg',
              sizeClasses[size]
            )}
          >
            <span
              className={cn(
                'font-bold text-white',
                size === 'sm' && 'text-xs',
                size === 'md' && 'text-sm', 
                size === 'lg' && 'text-lg',
                size === 'xl' && 'text-2xl'
              )}
            >
              KR
            </span>
          </div>
        ) : (
          <Image
            src="/logo.png"
            alt="Kenya RE"
            width={size === 'sm' ? 24 : size === 'md' ? 32 : size === 'lg' ? 40 : 56}
            height={size === 'sm' ? 24 : size === 'md' ? 32 : size === 'lg' ? 40 : 56}
            className="object-contain"
            priority
          />
        )}
      </div>
    );
  }

  if (variant === 'text') {
    return (
      <div className={cn('flex items-center space-x-2', className)}>
        {useInitials ? (
          <div
            className={cn(
              'flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 rounded-lg',
              sizeClasses[size]
            )}
          >
            <span
              className={cn(
                'font-bold text-white',
                size === 'sm' && 'text-xs',
                size === 'md' && 'text-sm',
                size === 'lg' && 'text-base',
                size === 'xl' && 'text-lg'
              )}
            >
              KR
            </span>
          </div>
        ) : (
          <Image
            src="/logo.png"
            alt="Kenya RE"
            width={size === 'sm' ? 48 : size === 'md' ? 64 : size === 'lg' ? 80 : 100}
            height={size === 'sm' ? 48 : size === 'md' ? 64 : size === 'lg' ? 80 : 100}
            className="object-contain"
            priority
          />
        )}
        <div className="flex flex-col">
          <span
            className={cn(
              'font-bold text-gray-900 leading-none',
              textSizeClasses[size]
            )}
          >
            KENYA RE
          </span>
          <span
            className={cn(
              'text-gray-600 text-xs leading-none mt-0.5',
              size === 'sm' && 'text-[10px]',
              size === 'md' && 'text-xs',
              size === 'lg' && 'text-sm',
              size === 'xl' && 'text-base'
            )}
          >
            FACULTATIVE DECISION SUPPORT
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('flex items-center space-x-3', className)}>
      {useInitials ? (
        <div
          className={cn(
            'flex items-center justify-center bg-gradient-to-br from-red-600 to-red-700 rounded-lg',
            sizeClasses[size]
          )}
        >
          <span className="font-bold text-white">KR</span>
        </div>
      ) : (
        <Image
          src="/logo.png"
          alt="Kenya RE"
          width={size === 'sm' ? 32 : size === 'md' ? 40 : size === 'lg' ? 48 : 64}
          height={size === 'sm' ? 24 : size === 'md' ? 30 : size === 'lg' ? 36 : 48}
          className="object-contain"
          priority
        />
      )}
      <div className="flex flex-col">
        <span
          className={cn(
            'font-bold text-gray-900 leading-none',
            textSizeClasses[size]
          )}
        >
          KRFDS
        </span>
        <span
          className={cn(
            'text-gray-600 leading-none mt-0.5',
            size === 'sm' && 'text-[10px]',
            size === 'md' && 'text-xs', 
            size === 'lg' && 'text-sm',
            size === 'xl' && 'text-base'
          )}
        >
          Facultative Decision Support
        </span>
      </div>
    </div>
  );
};

export default Logo;
