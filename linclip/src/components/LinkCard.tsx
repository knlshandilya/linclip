import React from 'react';

interface LinkCardProps{
    title: string;
    url: string;
    description?: string;
}
const LinkCard: React.FC<LinkCardProps> = ({ title, url, description }) => (
    <div className="p-4 border rounded-lg shadow">
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
        <h3 className="text-xl font-bold">{title}</h3>
      </a>
      {description && <p className="text-gray-700">{description}</p>}
    </div>
  );
  
  export default LinkCard;